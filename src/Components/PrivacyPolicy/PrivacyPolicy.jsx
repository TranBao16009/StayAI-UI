import React from "react";
const support = [
    { icon: "💬", title: "Hỗ trợ", text: "Sẵn sàng phục vụ 24/7." },
    { icon: "📞", title: "Hotline: 0707320581", text: "Tư vấn miễn phí cho khách hàng." },
    { icon: "✉️", title: "Email: stayal@bb.vn", text: "Trả lời nhanh chóng mọi yêu cầu." },
  ];
const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
   
      <div className="relative mb-6">
        <div className="absolute -left-6 top-0 w-10 h-10 bg-teal-500 rounded-full"></div>
        <h1 className="text-3xl font-bold text-gray-900 relative">
          Chính sách bảo mật
        </h1>
      </div>


      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-lg font-semibold">I. MỤC ĐÍCH VÀ PHẠM VI THU THẬP</h2>
          <p>
            Stay AI yêu cầu khách hàng cung cấp các thông tin cơ bản bao gồm:
            email, điện thoại, tên đăng nhập, mật khẩu đăng nhập, địa chỉ khi
            khách hàng đăng ký sử dụng dịch vụ của Stay AI.
          </p>
          <p>
            Việc bạn truy cập, đăng ký, sử dụng Stay AI có nghĩa rằng bạn đồng ý
            với các quy định trong chính sách bảo mật của chúng tôi.
          </p>
        </section>

        
        <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">II. Dịch Vụ, Ứng Dụng Liên Kết Với Stay AI</h2>
        <p className="text-gray-600 mt-2">Stay AI áp dụng một số điều khoản riêng khi khách hàng sử dụng dịch vụ:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Lấy vị trí hiện tại của bạn.</li>
          <li>Ghi dữ liệu của ứng dụng Stay AI lên thẻ nhớ.</li>
          <li>Truy cập vào Internet từ thiết bị của bạn.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">III. Thời Gian Lưu Trữ Thông Tin</h2>
        <p className="text-gray-600 mt-2">
          Stay AI sẽ lưu trữ thông tin cá nhân của khách hàng trong suốt thời gian tài khoản còn hoạt động.
          Nếu khách hàng yêu cầu xóa tài khoản, Stay AI sẽ tiến hành xóa hoặc ẩn thông tin theo quy định bảo mật.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">IV. Đối Tác Và Bên Thứ Ba</h2>
        <p className="text-gray-600 mt-2">
          Stay AI có thể chia sẻ thông tin của khách hàng với đối tác cung cấp dịch vụ (ví dụ: đơn vị thanh toán, vận chuyển),
          đảm bảo trải nghiệm tốt nhất. Các đối tác này cũng cam kết bảo mật thông tin theo chính sách của Stay AI.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700">V. Các Quy Định Về Bảo Mật Và An Toàn Thông Tin</h2>
        <p className="text-gray-600 mt-2">
          Stay AI áp dụng các biện pháp bảo mật tiên tiến để bảo vệ dữ liệu khách hàng khỏi các rủi ro mất mát, truy cập trái phép,
          sử dụng sai mục đích hoặc tiết lộ ngoài ý muốn.
        </p>
      </section>
        <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">VI. Thời Gian Lưu Trữ Thông Tin</h2>
        <p className="text-gray-600 mt-2">
          Stay AI sẽ lưu trữ thông tin cá nhân của khách hàng trong suốt thời gian tài khoản còn hoạt động trên hệ thống. 
          Trường hợp khách hàng yêu cầu xóa tài khoản hoặc không còn sử dụng dịch vụ, Stay AI sẽ tiến hành xóa hoặc ẩn 
          thông tin cá nhân theo quy định bảo mật, trừ khi có yêu cầu khác từ cơ quan pháp luật.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">VII. Đối Tác Và Bên Thứ Ba</h2>
        <p className="text-gray-600 mt-2">
          Stay AI có thể chia sẻ thông tin của khách hàng với các đối tác cung cấp dịch vụ liên quan (ví dụ: đơn vị thanh toán, 
          vận chuyển) để đảm bảo trải nghiệm tốt nhất. Các đối tác này cũng cam kết bảo mật thông tin theo chính sách của Stay AI 
          và quy định pháp luật hiện hành.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">VIII. Các Quy Định Về Bảo Mật Và An Toàn Thông Tin</h2>
        <p className="text-gray-600 mt-2">
          Stay AI áp dụng các biện pháp bảo mật tiên tiến để bảo vệ dữ liệu khách hàng khỏi các rủi ro mất mát, truy cập trái phép, 
          sử dụng sai mục đích hoặc tiết lộ thông tin ngoài ý muốn.
        </p>
        <p className="text-gray-600 mt-2">
          Chỉ những nhân sự được cấp quyền mới có thể truy cập vào dữ liệu khách hàng và họ phải tuân thủ nghiêm ngặt các chính sách bảo mật nội bộ.
        </p>
        <p className="text-gray-600 mt-2">
          Stay AI không chịu trách nhiệm đối với các rủi ro bảo mật phát sinh từ phía người dùng, bao gồm việc để lộ thông tin tài khoản hoặc sử dụng thiết bị không an toàn.
        </p>
      </section>

      <h2 className="text-4xl font-bold text-center mt-16 mb-8">Đồng hành 24/7 cùng công việc quản lý nhà trọ, cho thuê của bạn</h2>
        <h2 className="text-gray-500 font-bold text-center mb-8">Chúng tôi luôn cố gắng tạo ra môi trường làm việc chuyên nghiệp, sáng tạo và kỷ luật cao. Đội ngũ kỹ sư trẻ giàu nhiệt huyết và các nhân viên tư vấn khách hàng luôn sẵn sàng hỗ trợ bạn suốt 24/7, phần mềm quản lý ,cho thuê  nhà trọ luôn được phát triển hàng ngày.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {support.map((item, index) => (
            <div key={index} className="bg-teal-700 text-white p-6 rounded-lg text-center flex flex-col items-center ">
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="mt-2 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default PrivacyPolicy;
