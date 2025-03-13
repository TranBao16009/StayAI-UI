import React from 'react'
// import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-[#007370]">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 mt-[-90px]">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
                Đăng ký
                </h2>
                <div className="space-y-4">
                    <input type="Họ và tên" placeholder="Họ và tên"
                        className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none text-gray-600"
                    />
                    <input type="email" placeholder="Email"
                        className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none text-gray-600"
                    />

                    <input type="Số điện thoại" placeholder="Số điện thoại"
                        className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none text-gray-600"
                    />

                    <input type="Mật khẩu" placeholder="Mật khẩu"
                        className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none text-gray-600"
                    />
                    <input type="Nhập lại mật khẩu" placeholder="Nhập lại mật khẩu"
                        className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none text-gray-600"
                    />
                   
                    <p className="text-sm text-gray-600"> <input type="checkbox" className="mr-2" />Tôi đồng ý với các điều khoản sử dụng và chính sách quyền riêng tư </p>

                </div>
               <button className="w-full bg-[#007370] text-white py-3 rounded-lg mt-4 hover:bg-red-600 transition">Đăng kí  </button>


               
            </div>
        </div>
    )
}

export default Register
