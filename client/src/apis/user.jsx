import axios from "../axios"

export const apiValidatePhoneNumber = (data) =>
  axios({
    url: "/user/validate-phonenumber",
    method: "post",
    data,
  })
export const apiRegister = (data) =>
  axios({
    url: "/user/register",
    method: "post",
    data,
  })
export const apiLogin = (data) =>
  axios({
    url: "/user/login",
    method: "post",
    data,
  })
export const apiGetCurrent = () =>
  axios({
    url: "/user/current",
    method: "get",
  })
export const apiUpdateProfile = (data) =>
  axios({
    url: "/user/profile",
    method: "patch",
    data,
  })
export const apiGetUsersByManager = (params) =>
  axios({
    url: "/user/manager",
    method: "get",
    params,
  })
export const apiUpgradeToManager = () =>
  axios({
    url: "/user/utm",
    method: "patch",
  })
export const apiGetUsersByAdmin = (params) =>
  axios({
    url: "/user/",
    method: "get",
    params,
  })
export const apiGetCustomers = (params) =>
  axios({
    url: "/user/customer",
    method: "get",
    params,
  })
export const apiGetCustomersAdmin = (params) =>
  axios({
    url: "/user/admin",
    method: "get",
    params,
  })

export const apiUpdateUser = (id, data) =>
  axios({
    url: "/user/update/" + id,
    method: "patch",
    data,
  })
export const apiDeleteUser = (id) =>
  axios({
    url: "/user/" + id,
    method: "delete",
  })
export const apiUpdateUserByManager = (id, data) =>
  axios({
    url: "/user/update-by-manager/" + id,
    method: "patch",
    data,
  })
export const apiGetMyRooms = (params) =>
  axios({
    url: "/user/rented-rooms/",
    method: "get",
    params,
  })
export const apiGetIndexCounterByRoomId = (roomId) =>
  axios({
    url: "/user/rented-rooms-idx-counter/" + roomId,
    method: "get",
  })
export const apiUpdatePaymentIndex = (id, data) =>
  axios({
    url: "/user/payment-idx/" + id,
    method: "patch",
    data,
  })
export const apiCreatePaymentOrder = (amount, orderInfo, returnUrl) =>
  axios({
    url: "/vnpay/payment", // Đây là endpoint để tạo đơn thanh toán
    method: "get",
    params: {
      amount,
      orderInfo,
      returnUrl,
    },
  });


export const apiCallGPT = async (prompt) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions", // Endpoint của OpenAI GPT
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 800,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`, // Replace with your actual key
        },
      }
    );

    // Trả về kết quả từ API
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error calling GPT API:", error);
    throw error; // Đảm bảo lỗi được xử lý
  }
};