// 📁 src/mocks/fakeData.js
export const fakeDB = {
  users: [
    {
      id: 1,
      username: "admin",
      password: "1",
      role: "owner",
    },
    {
      id: 2,
      username: "tuananh",
      password: "2",
      role: "user",
    }
  ],

  rooms: [
    { id: 1, name: "Phòng A1", price: 3000000, status: "Còn trống" },
    { id: 2, name: "Phòng B2", price: 3500000, status: "Đã thuê" }
  ],

  contracts: [
    {
      id: 1,
      room: "A1",
      tenant: "Nguyễn Văn A",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      rent: 3000000,
      status: "Đang thuê"
    }
  ],

  invoices: [
    { id: 1, month: "Tháng 3/2024", amount: 3000000, status: "Chưa thanh toán" },
    { id: 2, month: "Tháng 2/2024", amount: 3000000, status: "Đã thanh toán" }
  ],

  news: [
    { id: 1, title: "Bất động sản TPHCM tăng mạnh", content: "Tin chi tiết..." },
    { id: 2, title: "Cảnh báo giá ảo khu Đông", content: "Tin chi tiết..." }
  ]
};
