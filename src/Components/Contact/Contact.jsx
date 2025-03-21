import React from 'react'
const support = [
    { icon: "💬", title: "Hỗ trợ", text: "Sẵn sàng phục vụ 24/7." },
    { icon: "📞", title: "Hotline: 0707320581", text: "Tư vấn miễn phí cho khách hàng." },
    { icon: "✉️", title: "Email: stayal@bb.vn", text: "Trả lời nhanh chóng mọi yêu cầu." },
  ];
  
  export default function Contact() {
    return (
        <div className="container mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold flex justify-center items-center gap-2">
          <span className="bg-teal-600 text-white rounded-full px-3 py-1">StayAI</span>
          – Phần mềm Quản lý,Cho Thuê Nhà trọ
        </h1>
        <p className="text-gray-600 mt-2">
          Cùng với các chuyên gia IT dày kinh nghiệm, đội ngũ tư vấn chuyên nghiệp, chúng tôi luôn mang đến giải pháp tốt nhất cho khách hàng.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="flex flex-col items-center">
            <div className="bg-teal-600 text-white p-4 rounded-full">📍</div>
            <h2 className="font-bold mt-3">Địa chỉ</h2>
            <p className="text-gray-600 cursor-pointer  hover:underline">Số 12 Quang Trung, Phường 12  , Q.Gò Vấp , TP Hồ Chí Minh.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-teal-600 text-white p-4 rounded-full">📞</div>
            <h2 className="font-bold mt-3">Hotline</h2>
            <p className="text-gray-600 cursor-pointer  hover:underline">0707320581</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-teal-600 text-white p-4 rounded-full">✉️</div>
            <h2 className="font-bold mt-3">Email</h2>
            <p className="text-gray-600 cursor-pointer hover:underline">stayal@bb.vn</p>
          </div>
        </div>
        
        
        
        <h2 className="text-4xl font-bold text-center mt-16 mb-8">Đồng hành 24/7 cùng công việc quản lý nhà trọ, cho thuê của bạn</h2>
        <h2 className="text-gray-500 font-bold text-center mb-8">Chúng tôi luôn cố gắng tạo ra môi trường làm việc chuyên nghiệp, sáng tạo và kỷ luật cao. Đội ngũ kỹ sư trẻ giàu nhiệt huyết và các nhân viên tư vấn khách hàng luôn sẵn sàng hỗ trợ bạn suốt 24/7, phần mềm quản lý ,cho thuê  nhà trọ luôn được phát triển hàng ngày.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {support.map((item, index) => (
            <div key={index} className="bg-teal-700 text-white p-6 rounded-2xl shadow-lg text-center ">
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="mt-2 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  

