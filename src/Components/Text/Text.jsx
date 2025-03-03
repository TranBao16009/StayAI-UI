import React from 'react'
import {Link} from 'react-router-dom'
const Text = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Tại sao bạn thích <span className="text-teal-600">Stay Al</span>?</h2>
            <p className="text-lg mb-8">Giao diện đơn giản, thông minh, giúp quản lý nhà trọ và tìm nhà trọ mọi lúc mọi nơi với dữ liệu bảo mật an toàn tuyệt đối, kiểm soát doanh số theo thời gian thực và tiết kiệm tối đa chi phí vận hành.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">  
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <img src="icon1.png" alt="" className="mx-auto mb-4" />
                    <h3 className="font-bold text-xl">Quản lý mọi lúc, mọi nơi</h3>
                    <p className="mt-2">Chủ trọ có thể quản lý nhà trọ mọi lúc mọi nơi, dữ liệu được quản lý tập trung, bảo mật, và an toàn tuyệt đối.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <img src="icon2.png" alt="" className="mx-auto mb-4" />
                    <h3 className="font-bold text-xl">Đơn giản & Dễ dùng</h3>
                    <p className="mt-2">Giao diện đơn giản, thân thiện, thông minh giúp người dùng có thể dễ dàng tìm kiếm nhà ở , giúp chủ trọ triển khai quản lý nhà trọ nhanh chóng.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <img src="icon3.png" alt="" className="mx-auto mb-4" />
                    <h3 className="font-bold text-xl">Phù hợp nhiều mô hình</h3>
                    <p className="mt-2">Chúng tôi nghiên cứu thiết kế phần mềm phù hợp với nhiều mô hình nhà trọ, chung cư mini, căn hộ dịch vụ.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <img src="icon4.png" alt="" className="mx-auto mb-4" />
                    <h3 className="font-bold text-xl">Tiết kiệm chi phí tối đa</h3>
                    <p className="mt-2">Chỉ với 12.000 đồng/phòng, chủ trọ đã có thể áp dụng công nghệ tiên tiến vào quản lý nhà trọ, căn hộ của mình.</p>
                </div>
            </div>
            
            <div className="mt-8">
                <Link to='/registers'><button className="bg-teal-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700">DÙNG THỬ MIỄN PHÍ</button></Link>
            </div>

           
        </div>
  )
}

export default Text
