import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import SideBars from "../Components/SideBars/SideBars";

export default function Profile() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedTab, setSelectedTab] = useState("Tổng quan");
    const [isTopUpOpen, setIsTopUpOpen] = useState(false);

    const handleTopUpClick = () => {
        setIsTopUpOpen(true);
    };

    const handleTopUpClose = () => {
        setIsTopUpOpen(false);
    };

    return (
        <>
        <SideBars/>

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
                    <div className="mt-2 flex items-center justify-between bg-gray-200 p-2 rounded-lg">
                        <p className="text-sm">Mã chuyển khoản</p>
                        <span className="font-bold">BDS42750026</span>
                    </div>
                    <button onClick={handleTopUpClick} className="mt-4 bg-teal-600 text-white py-2 px-4 w-full rounded-lg">Nạp tiền</button>
                </div>

                <div className="mt-4">
                    <ul className="space-y-2">
                        {["Thay đổi mật khẩu", "Thay đổi thông tin cá nhân"].map((tab) => (
                            <li
                                key={tab}
                                onClick={() => setSelectedTab(tab)}
                                className={`p-2 flex items-center space-x-2 rounded-lg cursor-pointer ${selectedTab === tab ? "bg-gray-200" : "hover:bg-gray-100"}`}
                            >
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

                {/* Form nạp tiền */}
                {isTopUpOpen && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg shadow-md w-96">
                            <h2 className="text-lg font-semibold">Nạp tiền</h2>
                            <form className="mt-4 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Số tiền</label>
                                    <input type="number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phương thức thanh toán</label>
                                    <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                                        <option>Chuyển khoản ngân hàng</option>
                                        <option>Thẻ tín dụng</option>
                                        <option>Ví điện tử</option>
                                    </select>
                                </div>
                                <button type="submit" className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-lg">Nạp tiền</button>
                                <button type="button" onClick={handleTopUpClose} className="mt-4 bg-gray-600 text-white py-2 px-4 rounded-lg">Hủy</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </>
    );
}