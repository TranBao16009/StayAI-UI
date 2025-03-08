import React from "react";
import {Link} from 'react-router-dom'
const plans = [
  { id: 1, name: "Gói 1", rooms: 10 },
  { id: 2, name: "Gói 2", rooms: 30 },
  { id: 3, name: "Gói 3", rooms: 50 },
  { id: 4, name: "Gói 4", rooms: 100 },
];

const support = [
  { icon: "💬", title: "Hỗ trợ", text: "Sẵn sàng phục vụ 24/7." },
  { icon: "📞", title: "Hotline: 0707320581", text: "Tư vấn miễn phí cho khách hàng." },
  { icon: "✉️", title: "Email: stayal@bb.vn", text: "Trả lời nhanh chóng mọi yêu cầu." },
];

export default function Pricing() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-5xl font-bold text-center mb-8"><span class="w-8 h-8 bg-teal-700 rounded-full mr-2"></span> Bảng giá dịch vụ</h2>
      <h2 className="text-gray-500 font-bold text-center mb-8">Lựa chọn gói phù hợp với bạn </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-teal-600 font-semibold">Liên hệ</p>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>✔ Quy mô tối đa {plan.rooms} phòng</li>
              <li>✔ Nâng cấp, cập nhật miễn phí</li>
              <li>✔ Bảo hành trọn đời</li>
              <li>✔ Hỗ trợ 24/7</li>
            </ul>
            <Link to='/registers'><button className="mt-4 bg-teal-700 text-white py-2 px-6 rounded-lg hover:bg-teal-800">
              DÙNG THỬ
            </button></Link>
          </div>
        ))}
      </div>
      
      <h2 className="text-4xl font-bold text-center mt-16 mb-8">Đồng hành 24/7 cùng công việc quản lý cho thuê nhà trọ của bạn</h2>
      <h2 className="text-gray-500 font-bold text-center mb-8">Chúng tôi luôn cố gắng tạo ra môi trường làm việc chuyên nghiệp, sáng tạo và kỷ luật cao. Đội ngũ kỹ sư trẻ giàu nhiệt huyết và các nhân viên tư vấn khách hàng luôn sẵn sàng hỗ trợ bạn suốt 24/7, phần mềm quản lý nhà trọ luôn được phát triển hàng ngày.</h2>
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
