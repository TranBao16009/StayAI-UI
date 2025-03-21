import React, { useState, useEffect } from "react";

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Giả lập dữ liệu tin tức
    const fakeNews = [
      {
        id: 1,
        title: "Đất Nền Hòa Lạc Nổi Sóng Đầu Năm 2025",
        description: "Thị trường đất nền Hòa Lạc đang nổi sóng nhẹ thời điểm đầu năm 2025 trong mạch tăng trưởng chung của thị trường bất động sản.",
        imageUrl: require("../../Assets/image1.jpg"),
        url: "#"
      },
      {
        id: 2,
        title: "Triển Vọng Bất Động Sản Thủy Nguyên Nhìn Từ 'Sự Kiện' Lên Thành Phố",
        description: "Triển vọng bất động sản Thủy Nguyên nhìn từ 'Sự kiện' lên thành phố.",
        imageUrl: require("../../Assets/image2.png"),
        url: "#"
      },
      {
        id: 3,
        title: "Chương Trình Dành Riêng Cho Môi Giới Với Tổng Giá Trị Giải Thưởng Hơn 400 Triệu Từ Ngân Hàng UOB Việt Nam",
        description: "Chương trình dành riêng cho môi giới với tổng giá trị giải thưởng hơn 400 triệu từ ngân hàng UOB Việt Nam.",
        imageUrl: require("../../Assets/image3.jpg"),
        url: "#"
      },
      {
        id: 4,
        title: "Chiều nay, Phó Thủ tướng họp với Bộ Nông nghiệp và Môi trường, Bộ Công an, Thanh tra Chính phủ... về 2 nội dung quan trọng liên quan đến đất đai",
        description: "Chiều nay, Phó Thủ tướng họp với Bộ Nông nghiệp và Môi trường, Bộ Công an, Thanh tra Chính phủ... về 2 nội dung quan trọng liên quan đến đất đai",
        imageUrl: require("../../Assets/image4.webp"),
        url: "https://cafef.vn/chieu-nay-pho-thu-tuong-hop-voi-bo-nong-nghiep-va-moi-truong-bo-cong-an-thanh-tra-chinh-phu-ve-2-noi-dung-quan-trong-lien-quan-den-dat-dai-188250320082653461.chn"
      },
      {
        id: 5,
        title: "Nơi sở hữu cảng biển lớn nhất Việt Nam vừa lên thành phố tiếp tục đón thêm tin vui có bến cảng tổng hợp hơn 2.300 tỷ đồng",
        description: "Nơi sở hữu cảng biển lớn nhất Việt Nam vừa lên thành phố tiếp tục đón thêm tin vui có bến cảng tổng hợp hơn 2.300 tỷ đồng",
        imageUrl: require("../../Assets/image5.webp"),
        url: "https://cafef.vn/noi-so-huu-cang-bien-lon-nhat-viet-nam-vua-len-thanh-pho-tiep-tuc-don-them-tin-vui-co-ben-cang-tong-hop-hon-2300-ty-dong-188250320083346107.chn"
      },
      {
        id: 6,
        title: "Khu vực nào đang có lượng người tìm kiếm đất nền nhiều nhất, có tốc độ tăng giá mạnh?",
        description: "Khu vực nào đang có lượng người tìm kiếm đất nền nhiều nhất, có tốc độ tăng giá mạnh?",
        imageUrl: require("../../Assets/image6.webp"),
        url: "https://cafef.vn/khu-vuc-nao-dang-co-luong-nguoi-tim-kiem-dat-nen-nhieu-nhat-co-toc-do-tang-gia-manh-18825032007282452.chn"
      }

    ];
    setNews(fakeNews);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Tin tức Stay AI</h1>
      <p className="text-lg mb-6 text-center">
        Thông tin mới, đầy đủ, hấp dẫn về thị trường bất động sản Việt Nam thông qua dữ liệu lớn về giá, giao dịch, nguồn cung - cầu và khảo sát thực tế của đội ngũ phóng viên, biên tập của Stay AI.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((article) => (
          <div key={article.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-4">{article.description}</p>
            <a href={article.url} className="text-teal-600 hover:underline">
              Đọc thêm
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;