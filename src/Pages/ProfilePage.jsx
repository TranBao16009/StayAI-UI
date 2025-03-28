import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { AiOutlineDashboard, AiOutlineSolution, AiOutlineSetting } from "react-icons/ai";
import SideBar from "../Components/SideBar/SideBar";
import { Link } from "react-router-dom";

export default function ProfilePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedTab, setSelectedTab] = useState("Tổng quan");

    return (
        <>
        <SideBar/>

        <div className="flex h-screen bg-gray-100">
            <div className={`bg-white p-4 w-64 shadow-lg ${isSidebarOpen ? "block" : "hidden"} md:block`}>
                <div className="flex items-center justify-between border-b pb-4">
                    <h2 className="text-xl font-bold">Bao Tran</h2>
                    <button onClick={() => setIsSidebarOpen(false)} className="md:hidden">
                        <IoMdClose size={20} />
                    </button>
                </div>

                <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold">Số dư tài khoản</h3>
                    <p>TK Chính: <span className="font-bold">0</span></p>
                    <p>TK Khuyến mãi: <span className="font-bold">0</span></p>
                    {/* <div className="mt-2 flex items-center justify-between bg-gray-200 p-2 rounded-lg">
                        <p className="text-sm">Mã chuyển khoản</p>
                        <span className="font-bold">BDS42750026</span>
                    </div> */}
                    <button className="mt-4 bg-teal-600 text-white py-2 px-4 w-full rounded-lg">Nạp tiền</button>
                </div>

                <div className="mt-4">
                    <ul className="space-y-2">
                        {["Tổng quan", "Quản lý tin đăng", "Tiện ích", "Thay đổi mật khẩu", "Thay đổi thông tin cá nhân"].map((tab) => (
                            <li
                                key={tab}
                                onClick={() => setSelectedTab(tab)}
                                className={`p-2 flex items-center space-x-2 rounded-lg cursor-pointer ${selectedTab === tab ? "bg-gray-200" : "hover:bg-gray-100"}`}
                            >
                                {tab === "Tổng quan" && <AiOutlineDashboard />}
                                {tab === "Quản lý tin đăng" && <AiOutlineSolution />}
                                {tab === "Tiện ích" && <AiOutlineSetting />}
                                {tab === "Thay đổi mật khẩu" && <AiOutlineSetting />}
                                {tab === "Thay đổi thông tin cá nhân" && <AiOutlineSetting />}
                                <span>{tab}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex-1 p-6">
                <button className="md:hidden mb-4" onClick={() => setIsSidebarOpen(true)}>
                    <FaBars size={24} />
                </button>
                <h1 className="text-2xl font-bold">{selectedTab}</h1>
                {selectedTab === "Tổng quan" && (
                    <div className="grid grid-cols-3 gap-4">
                
                        <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
                            <h3 className="font-semibold">Tin đăng</h3>
                            <p className="text-lg font-bold">0 tin</p>
                            <p className="text-sm text-gray-500">Đang hiển thị</p>
                        </div>
              
                        <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
                            <h3 className="font-semibold">Liên hệ trong 30 ngày</h3>
                            <p className="text-lg font-bold">0 người</p>
                            <p className="text-sm text-green-600">+0 mới vào hôm nay</p>
                        </div>

                        <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
                            <h3 className="font-semibold">Số dư</h3>
                            <p className="text-lg font-bold">0 đ</p>
                            <p className="text-sm text-gray-500">Tài khoản chính</p>
                            <button className="mt-2 text-blue-600">Nạp tiền</button>
                        </div>
                    </div>
                )}
                {selectedTab === "Quản lý tin đăng" && (
                    <div className="grid grid-cols-3 gap-4">
                       
                        <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
                            <h3 className="font-semibold">Tin đăng</h3>
                            <p className="text-lg font-bold">0 tin</p>
                            <p className="text-sm text-gray-500">Đang hiển thị</p>
                            <Link to='/postnew'><button className="mt-2 text-blue-600">Đăng tin </button></Link>
                        </div>
                 
                        <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
                            <h3 className="font-semibold">Danh sách tin </h3>
                            <p className="text-lg font-bold">0 tin</p>
                            <p className="text-sm text-green-600">Đang hiển thị</p>
                        </div>
                     
                        <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
                            <h3 className="font-semibold">Tin nháp </h3>
                            <p className="text-lg font-bold">0 tin</p>
                            <p className="text-sm text-gray-500">Đang hiển thị</p>
                        </div>
                    </div>
                )}
                {selectedTab === "Tiện ích" && (
                    <div className="mt-4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h2 className="text-lg font-semibold">Các tiện ích</h2>
                        <ul className="mt-2 space-y-2">
                            <li className="p-2 bg-gray-100 rounded-lg">🔍 Công cụ tìm kiếm nâng cao</li>
                            <li className="p-2 bg-gray-100 rounded-lg">📅 Lịch hẹn & nhắc nhở</li>
                            <li className="p-2 bg-gray-100 rounded-lg">📊 Phân tích dữ liệu</li>
                            <li className="p-2 bg-gray-100 rounded-lg">📌 Ghim tin đăng quan trọng</li>
                        </ul>
                    </div>
                )}
                {selectedTab === "Thay đổi mật khẩu" && (
                    <div className="mt-4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h2 className="text-lg font-semibold">Thay đổi mật khẩu</h2>
                        <form className="mt-4 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Mật khẩu hiện tại</label>
                                <input type="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Mật khẩu mới</label>
                                <input type="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Xác nhận mật khẩu mới</label>
                                <input type="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <button type="submit" className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-lg">Lưu thay đổi</button>
                        </form>
                    </div>
                )}
                {selectedTab === "Thay đổi thông tin cá nhân" && (
                    <div className="mt-4 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h2 className="text-lg font-semibold">Thay đổi thông tin cá nhân</h2>
                        <form className="mt-4 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Họ và tên</label>
                                <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                                <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            </div>
                            <button type="submit" className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-lg">Lưu thay đổi</button>
                        </form>
                    </div>
                )}
            </div>

          
        </div>
        </>
    );
}