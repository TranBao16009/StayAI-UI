import React from 'react'

const Registerss = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-[#007370]">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96 mt-[-100px]">
                    <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
                        Đăng ký
                    </h2>
                    <div className="space-y-4">
                        <input type="Tên tổ chức" placeholder="Tên tổ chức"
                            className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none text-gray-600"
                        />
                        <input type="Địa chỉ " placeholder="Địa chỉ "
                            className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none text-gray-600"
                        />

                        <input type="Mã số thuế" placeholder="Mã số thuế"
                            className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none text-gray-600"
                        />

                        <input type="Chụp cccd mặt trước" placeholder="Chụp cccd mặt trước"
                            className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none text-gray-600"
                        />
                        <input type="Chụp cccd mặt sau" placeholder="Chụp cccd mặt sau"
                            className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none text-gray-600"
                        />
                        <p className="text-sm text-gray-600">
                            <input type="checkbox" className="mr-2" />
                            Tôi đồng ý với các điều khoản sử dụng và chính sách quyền riêng tư{" "}

                        </p>

                    </div>
                    <button className="w-full bg-[#007370] text-white py-3 rounded-lg mt-4 hover:bg-red-600 transition">Đăng ký  </button>

                </div>
            </div>
        </div>
    )
}

export default Registerss
