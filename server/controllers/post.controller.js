const asyncHandler = require("express-async-handler")
const db = require("../models")
const { Sequelize, Op } = require("sequelize")
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const ai = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY);

// Khởi tạo đúng model
const model = ai.getGenerativeModel({ model: "gemini-2.0-flash-001" });

module.exports = {
  getSuggestedPosts: asyncHandler(async (req, res) => {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({
        success: false,
        mes: "Missing input message",
      });
    }

    // Lấy danh sách bài viết từ DB
    const posts = await db.Post.findAll({
      where: { isDeleted: false },
      attributes: ["id", "title", "address", "description", "star", "images"],
      include: [
        { model: db.Catalog, as: "rCatalog", attributes: ["value"] },
        { model: db.Room, as: "rRooms", attributes: ["price", "area"] },
      ],
      limit: 10,
    });

    // Format để đưa vào prompt AI
    const formattedPosts = posts.map((p, i) => {
      const priceList = p.rRooms.map((r) => r.price).join(", ");
      return `${i + 1}. ${p.title} (${p.rCatalog?.value}) - ${p.address}. Giá: ${priceList} VND. Sao: ${p.star || "N/A"}.\nMô tả: ${p.description}`;
    });

    const prompt = `
    Bạn là một trợ lý ảo chuyên gợi ý bài đăng thuê trọ cho người dùng, giọng điệu thân thiện, đáng tin cậy.
    
    Nhiệm vụ:
    1. Phân tích nội dung câu hỏi của người dùng.
    2. Nếu câu hỏi **liên quan đến nhu cầu thuê phòng trọ**, hãy:
       - Chọn **1 bài đăng phù hợp nhất** từ danh sách dưới (đánh số từ 1 đến 10).
       - Trả lời theo mẫu: "Tôi gợi ý bài số X vì ..."
    
    3. Nếu câu hỏi **không liên quan đến việc thuê phòng**, chỉ cần lịch sự trả lời: 
       "Tôi là chatbot hỗ trợ tìm phòng trọ. Bạn có thể cho tôi biết khu vực, mức giá, hoặc yêu cầu cụ thể để tôi giúp bạn nhé!"
    - Trò chuyện tự nhiên
    - Phản hồi ngắn gọn, súc tích, dễ hiểu
    - Ưu tiên gợi ý phòng phù hợp (nếu có)
4.Nếu người dùng **chưa nói rõ nhu cầu** (không có từ khóa như vị trí, giá, tiện ích):
→ Hãy gợi ý nhẹ nhàng:
"Bạn vui lòng cho mình biết:
- Khu vực muốn thuê (VD: Hà Đông, Thanh Xuân)
- Ngân sách dự kiến
- Yêu cầu đặc biệt nếu có (VD: gần trường, có điều hòa)"
Nếu đã đủ thông tin → gợi ý bài đăng phù hợp.

    Câu hỏi người dùng: "${message}"
    
    Danh sách bài đăng:
    ${formattedPosts.map((item, idx) => `${idx + 1}. ${item}`).join("\n\n")}
    `.trim();


    try {
      const result = await model.generateContent(prompt);
      const suggestion = await result.response.text();

      // Tìm các chỉ số bài đăng AI đề xuất (1-based index)
      const suggestedIndexes = [...suggestion.matchAll(/\b(\d{1,2})\b/g)]
        .map((m) => Number(m[1]) - 1)
        .filter((i) => i >= 0 && i < posts.length);

      const uniqueIndexes = [...new Set(suggestedIndexes)];
      const suggestedPosts = uniqueIndexes.map((i) => posts[i]);

      return res.json({
        success: true,
        mes: "Gợi ý thành công",
        suggestion,
        ...(suggestedPosts.length > 0 && { suggestedPosts }), // chỉ thêm nếu có
      });
    } catch (error) {
      console.error("🔥 AI Error:", error);
      return res.status(500).json({
        success: false,
        mes: "Lỗi AI gợi ý bài đăng",
        error: error.message,
      });
    }
  }),


  createNewPost: asyncHandler(async (req, res) => {
    const { id } = req.user
    const { title, address, catalogId, description, images, rooms } = req.body
    const newPost = await db.Post.findOrCreate({
      where: { title },
      defaults: {
        title,
        description,
        address,
        catalogId,
        images,
        postedBy: id,
      },
    })

    if (!newPost[1])
      return res.json({
        success: false,
        mes: "Tựa đề tin đăng bị trùng.",
      })

    const postId = newPost[0].id
    const bulkCreateRoomData = rooms.map((el) => ({
      price: el.price,
      area: el.area,
      postId,
      title: el.title,
      stayMax: el.stayMax,
      electricPrice: el.electricPrice,
      waterPrice: el.waterPrice,
      capsPrice: el.capsPrice,
      internetPrice: el.internetPrice,
    }))
    const newRooms = await db.Room.bulkCreate(bulkCreateRoomData, { raw: true })
    if (!newRooms || newRooms.length === 0)
      return res.json({
        success: true,
        mes: "Tạo tin đăng thành công nhưng chưa tạo được phòng ở.",
      })

    const rooms_convenients = []
    newRooms.forEach((el) => {
      const convenients = rooms.find((room) => room.title === el.title)?.convenients
      if (convenients) convenients.forEach((n) => rooms_convenients.push({ roomId: el.id, convenientId: n }))
    })

    const response = await db.Room_Convenient.bulkCreate(rooms_convenients)
    if (!response || response.length === 0)
      return res.json({
        success: true,
        mes: "Tạo tin đăng thành công nhưng chưa tạo được phòng ở.",
      })
    return res.json({
      success: true,
      mes: "Tạo tin đăng thành công",
    })
  }),

  getPosts: asyncHandler(async (req, res) => {
    const { limit, page, sort, fields, title, keyword, price, area, isDeleted, ...filters } = req.query
    const options = {}
    if (fields) {
      const attributes = fields.split(",")
      const isExclude = attributes.some((el) => el.startsWith("-"))
      if (isExclude)
        options.attributes = {
          exclude: attributes.map((el) => el.replace("-", "")),
        }
      else options.attributes = attributes
    }
    if (keyword)
      filters[Op.or] = [
        {
          title: Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col("Post.title")),
            "LIKE",
            `%${keyword.toLocaleLowerCase()}%`
          ),
        },
        {
          address: Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col("Post.address")),
            "LIKE",
            `%${keyword.toLocaleLowerCase()}%`
          ),
        },
      ]
    if (sort) {
      const order = sort
        .split(",")
        .map((el) => (el.startsWith("-") ? [el.replace("-", ""), "DESC"] : [el, "ASC"]))
      options.order = order
    }
    if (!isDeleted) filters.isDeleted = false
    // filters["$rRooms.isDeleted&"] = false
    if (!limit) {
      const response = await db.Post.findAll({
        where: filters,
        ...options,
      })
      return res.json({
        success: response.length > 0,
        mes: response.length > 0 ? "Got." : "Có lỗi, hãy thử lại sau.",
        posts: response,
      })
    }
    if (price) {
      options.subQuery = false
      if (price.length === 1) filters["$rRooms.price$"] = { [Op.gte]: price[0] }
      else filters["$rRooms.price$"] = { [Op.between]: price }
    }
    if (area) {
      options.subQuery = false
      if (area.length === 1) filters["$rRooms.area$"] = { [Op.gte]: area[0] }
      else filters["$rRooms.area$"] = { [Op.between]: area }
    }
    const prevPage = !page || page === 1 ? 0 : page - 1
    const offset = prevPage * limit
    if (offset) options.offset = offset
    options.limit = +limit
    const response = await db.Post.findAndCountAll({
      where: filters,
      include: [
        {
          model: db.Catalog,
          as: "rCatalog",
          attributes: ["id", "value"],
        },
        {
          model: db.User,
          as: "rUser",
          attributes: ["id", "username"],
          include: [{ model: db.Profile, attributes: ["image"], as: "rprofile" }],
        },
        {
          model: db.Room,
          as: "rRooms",
          attributes: { exclude: ["createdAt", "updatedAt"] },
          include: [
            {
              model: db.Room_Convenient,
              as: "rConvenients",
              attributes: { exclude: ["createdAt", "updatedAt"] },
              include: [
                {
                  model: db.Convenient,
                  as: "rValues",
                  attributes: { exclude: ["createdAt", "updatedAt"] },
                },
              ],
            },
          ],
        },
      ],
      ...options,
      distinct: true,
    })

    return res.json({
      success: Boolean(response),
      mes: response ? "Got." : "Có lỗi, hãy thử lại sau.",
      posts: response,
    })
  }),

  getPostById: asyncHandler(async (req, res) => {
    const { pid } = req.params
    const response = await db.Post.findByPk(pid, {
      include: [
        { model: db.Catalog, as: "rCatalog", attributes: ["id", "value"] },
        {
          model: db.User,
          as: "rUser",
          attributes: ["id", "username", "phone"],
          include: [{ model: db.Profile, as: "rprofile" }],
        },
        {
          model: db.Room,
          as: "rRooms",
          attributes: { exclude: ["createdAt", "updatedAt"] },
          include: [
            {
              model: db.Room_Convenient,
              as: "rConvenients",
              attributes: { exclude: ["createdAt", "updatedAt"] },
              include: [
                {
                  model: db.Convenient,
                  as: "rValues",
                  attributes: { exclude: ["createdAt", "updatedAt"] },
                },
              ],
            },
          ],
        },
        {
          model: db.Rating,
          as: "rRating",
          attributes: {
            exclude: ["updatedAt", "isDeleted"],
          },
          include: [
            {
              model: db.User,
              as: "rVoter",
              attributes: ["id", "username"],
              include: [{ model: db.Profile, as: "rprofile", attributes: ["image"] }],
            },
          ],
        },
      ],
    })
    // await db.Post.update(
    //   { views: Sequelize.literal("views + 1") },
    //   { where: { id: pid } }
    // )
    await db.Post.increment("views", { by: 1, where: { id: pid } })
    return res.json({
      success: !!response,
      post: response,
    })
  }),
  updatePost: asyncHandler(async (req, res) => {
    const { id } = req.params
    const { title, address, catalogId, description, images, rooms } = req.body
    const response = await db.Post.update(
      { title, address, catalogId, description, images },
      { where: { id } }
    )
    if (rooms && rooms.length > 0) {
      const bulkCreateRoomData = rooms.map((el) => ({
        price: el.price,
        area: el.area,
        postId: id,
        title: el.title,
        stayMax: el.stayMax,
        electricPrice: el.electricPrice,
        waterPrice: el.waterPrice,
        capsPrice: el.capsPrice,
        internetPrice: el.internetPrice,
      }))
      const newRooms = await db.Room.bulkCreate(bulkCreateRoomData, {
        raw: true,
      })
      if (!newRooms || newRooms.length === 0)
        return res.json({
          success: true,
          mes: "Cập nhật tin đăng thành công nhưng chưa thêm được phòng ở.",
        })

      const rooms_convenients = []
      newRooms.forEach((el) => {
        const convenients = rooms.find((room) => room.title === el.title)?.convenients
        if (convenients)
          convenients.forEach((n) => rooms_convenients.push({ roomId: el.id, convenientId: n }))
      })
      await db.Room_Convenient.bulkCreate(rooms_convenients)
    }

    return res.json({
      success: response[0] > 0,
      mes: response[0] > 0 ? "Cập nhật thành công" : "Cập nhật không thành công.",
    })
  }),
  removePost: asyncHandler(async (req, res) => {
    const { id } = req.params
    const response = await db.Post.update({ isDeleted: true }, { where: { id } })
    return res.json({
      success: response > 0,
      mes: response > 0 ? "Xóa thành công" : "Xóa không thành công",
    })
  }),

  getAdminPosts: asyncHandler(async (req, res) => {
    const { limit, page, sort, fields, title, keyword, price, area, isDeleted, ...filters } = req.query
    const options = {}
    if (fields) {
      const attributes = fields.split(",")
      const isExclude = attributes.some((el) => el.startsWith("-"))
      if (isExclude)
        options.attributes = {
          exclude: attributes.map((el) => el.replace("-", "")),
        }
      else options.attributes = attributes
    }
    if (keyword)
      filters[Op.or] = [
        {
          title: Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col("Post.title")),
            "LIKE",
            `%${keyword.toLocaleLowerCase()}%`
          ),
        },
        {
          address: Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col("Post.address")),
            "LIKE",
            `%${keyword.toLocaleLowerCase()}%`
          ),
        },
      ]
    if (sort) {
      const order = sort
        .split(",")
        .map((el) => (el.startsWith("-") ? [el.replace("-", ""), "DESC"] : [el, "ASC"]))
      options.order = order
    }
    if (!isDeleted) filters.isDeleted = false
    // filters["$rRooms.isDeleted&"] = false
    if (!limit) {
      const response = await db.Post.findAll({
        where: filters,
        ...options,
      })
      return res.json({
        success: response.length > 0,
        mes: response.length > 0 ? "Got." : "Có lỗi, hãy thử lại sau.",
        posts: response,
      })
    }
    if (price) {
      options.subQuery = false
      if (price.length === 1) filters["$rRooms.price$"] = { [Op.gte]: price[0] }
      else filters["$rRooms.price$"] = { [Op.between]: price }
    }

    const prevPage = !page || page === 1 ? 0 : page - 1
    const offset = prevPage * limit
    if (offset) options.offset = offset
    options.limit = +limit
    const response = await db.Post.findAndCountAll({
      where: filters,
      include: [
        {
          model: db.Catalog,
          as: "rCatalog",
          attributes: ["id", "value"],
        },
        {
          model: db.User,
          as: "rUser",
          attributes: ["id", "username"],
          include: [{ model: db.Profile, attributes: ["image"], as: "rprofile" }],
        },
        {
          model: db.Room,
          as: "rRooms",
          attributes: { exclude: ["createdAt", "updatedAt"] },
          include: [
            {
              model: db.Room_Convenient,
              as: "rConvenients",
              attributes: { exclude: ["createdAt", "updatedAt"] },
              include: [
                {
                  model: db.Convenient,
                  as: "rValues",
                  attributes: { exclude: ["createdAt", "updatedAt"] },
                },
              ],
            },
          ],
        },
      ],
      ...options,
      distinct: true,
    })

    return res.json({
      success: Boolean(response),
      mes: response ? "Got." : "Có lỗi, hãy thử lại sau.",
      posts: response,
    })
  }),
}
