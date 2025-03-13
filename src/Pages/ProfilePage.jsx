import React from "react";

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
     
      <nav className="bg-steal-500 p-4 text-white font-bold text-lg">
       Stay AI
      </nav>

      <div className="max-w-5xl mx-auto p-4 grid grid-cols-3 gap-4">
        
        <div className="bg-white p-4 rounded-lg shadow col-span-1">
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/100"
              alt="avatar"
              className="rounded-full w-24 h-24 object-cover"
            />
            <h2 className="text-xl font-semibold mt-2">Bao Tran</h2>
            <p className="text-gray-500 text-sm">Chưa có đánh giá</p>
          </div>
          <button className="mt-4 bg-[#007370] text-white px-4 py-2 rounded w-full">
            Chia sẻ trang của bạn
          </button>
          <button className="mt-2 border px-4 py-2 rounded w-full">
            Chỉnh sửa trang cá nhân
          </button>
          <div className="mt-4 text-sm text-gray-600">
            <p>📅 Đã tham gia: 6 ngày</p>
            <p>✔️ Đã xác thực</p>
            <p>📍 Địa chỉ: Chưa cung cấp</p>
          </div>
        </div>

        
        <div className="bg-white p-4 rounded-lg shadow col-span-2">
          <div className="border-b pb-2 flex justify-between">
            <span className="text-orange-500 font-semibold">Đang hiển thị (0)</span>
            <span className="text-gray-500">Đã bán (0)</span>
          </div>
          <div className="flex flex-col items-center mt-4 text-gray-600">
            <img
              src=""
              alt="empty"
              className="w-24"
            />
            <p>Bạn chưa có tin đăng nào</p>
            <button className="mt-2 bg-[#007370] text-white px-4 py-2 rounded">
              ĐĂNG TIN NGAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
