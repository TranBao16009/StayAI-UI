import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineDashboard, AiOutlineUser, AiOutlineSolution, AiOutlineCreditCard, AiOutlineSetting } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { IoIosFunnel } from "react-icons/io";


export default function ProfilePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [customers] = useState([
        { id: 1, name: "Nguyễn Văn A", email: "a@example.com", phone: "0123456789" },
        { id: 1, name: "Nguyễn Văn A", email: "a@example.com", phone: "0123456789" },
        { id: 1, name: "Nguyễn Văn A", email: "a@example.com", phone: "0123456789" },
        { id: 1, name: "Nguyễn Văn A", email: "a@example.com", phone: "0123456789" },
        { id: 2, name: "Trần Thị B", email: "b@example.com", phone: "0987654321" }
    ]);
    const [selectedTab, setSelectedTab] = useState("Tổng quan");

    return (
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
                    <button className="mt-4 bg-teal-600 text-white py-2 px-4 w-full rounded-lg">Nạp tiền</button>
                </div>

                <div className="mt-4">
                    <ul className="space-y-2">
                        {["Tổng quan", "Quản lý tin đăng", "Quản lý khách hàng", "Quản lý tài chính", "Hướng dẫn sử dụng", "Tiện ích"].map((tab) => (
                            <li
                                key={tab}
                                onClick={() => setSelectedTab(tab)}
                                className={`p-2 flex items-center space-x-2 rounded-lg cursor-pointer ${selectedTab === tab ? "bg-gray-200" : "hover:bg-gray-100"}`}
                            >
                                {tab === "Tổng quan" && <AiOutlineDashboard />}
                                {tab === "Quản lý tin đăng" && <AiOutlineSolution />}
                                {tab === "Quản lý khách hàng" && <AiOutlineUser />}
                                {tab === "Gói Hội viên" && <AiOutlineCreditCard />}
                                {tab === "Quản lý tài chính" && <AiOutlineCreditCard />}
                                {tab === "Hướng dẫn sử dụng" && <AiOutlineSetting />}
                                {tab === "Tiện ích" && <AiOutlineSetting />}
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
                        {/* Card 1 */}
                        <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
                            <h3 className="font-semibold">Tin đăng</h3>
                            <p className="text-lg font-bold">0 tin</p>
                            <p className="text-sm text-gray-500">Đang hiển thị</p>
                        </div>
                        {/* Card 2 */}
                        <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
                            <h3 className="font-semibold">Liên hệ trong 30 ngày</h3>
                            <p className="text-lg font-bold">0 người</p>
                            <p className="text-sm text-green-600">+0 mới vào hôm nay</p>
                        </div>
                        {/* Card 3 */}
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
                        {/* Card 1 */}
                        <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
                            <h3 className="font-semibold">Tin đăng</h3>
                            <p className="text-lg font-bold">0 tin</p>
                            <p className="text-sm text-gray-500">Đang hiển thị</p>
                            <button className="mt-2 text-blue-600">Đăng tin </button>
                        </div>
                        {/* Card 2 */}
                        <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
                            <h3 className="font-semibold">Danh sách tin </h3>
                            <p className="text-lg font-bold">0 tin</p>
                            <p className="text-sm text-green-600">Đang hiển thị</p>
                        </div>
                        {/* Card 3 */}
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
                {selectedTab === "Quản lý khách hàng" && (
                    <div>
                        <div className="mt-4 flex items-center space-x-4">
                            <div className="relative flex-1">
                                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Tìm theo tên khách hàng, SĐT hoặc email"
                                    className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button className="flex items-center space-x-2 px-4 py-2 border rounded-md hover:bg-gray-100">
                                <IoIosFunnel />
                                <span>Lọc theo nhãn</span>
                            </button>
                        </div>
                        <div className="mt-6 flex space-x-6">
                            <div className="flex-1 bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center justify-center">
                                {customers.length === 0 ? (
                                    <div className="text-center">
                                        <h2 className="text-lg font-semibold mt-2">Chưa có khách hàng nào</h2>
                                        <p className="text-gray-500">Hiện tại bạn chưa có khách hàng nào</p>
                                    </div>
                                ) : (
                                    <ul>
                                        {customers.map((customer) => (
                                            <li
                                                key={customer.id}
                                                className="p-2 cursor-pointer hover:bg-gray-100"
                                                onClick={() => setSelectedCustomer(customer)}
                                            >
                                                {customer.name}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="flex-1 bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center justify-center">
                                {selectedCustomer ? (
                                    <div>
                                        <h2 className="text-lg font-semibold">{selectedCustomer.name}</h2>
                                        <p>{selectedCustomer.email}</p>
                                        <p>{selectedCustomer.phone}</p>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <h2 className="text-lg font-semibold mt-2">Không có khách hàng nào được chọn</h2>
                                        <p className="text-gray-500">Chọn một khách hàng để xem chi tiết</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

            </div>


            <div className="fixed right-4 bottom-16 bg-gray-800 text-white p-3 rounded-lg cursor-pointer flex items-center space-x-2 shadow-lg">
                <MdOutlineFeedback size={20} />
                <span>Phản hồi</span>
            </div>
            <div className="fixed right-4 bottom-4 bg-teal-500 text-white p-3 rounded-full shadow-lg cursor-pointer">
                <FiMessageSquare size={24} />
            </div>
        </div>
    );
}
