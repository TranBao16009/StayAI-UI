
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const SideBar = () => {
    const { user, logout } = useContext(ShopContext);
    const handleSelect = () => {
        setDropdownOpen(false);
    };
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <nav className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="text-3xl font-bold text-teal-600 mr-8">Stay AI</div>
            <div className="flex space-x-6 items-center">
                <Link to="/" className="hover:underline flex items-center">
                    <span className="ml-1">•</span>Trang chủ
                </Link>
                <Link to="/rooms" className="hover:underline flex items-center">
                    <span className="ml-1">•</span>Phòng trọ
                </Link>
                <Link to="/pricing" className="hover:underline flex items-center">
                    <span className="ml-1">•</span>Bảng giá
                </Link>
                <Link to="/news" className="hover:underline flex items-center">
                    <span className="ml-1">•</span>Tin tức
                </Link>
                <Link to="/contact" className="hover:underline flex items-center">
                    <span className="ml-1">•</span>Liên hệ
                </Link>
            </div>

            <div className="flex items-center space-x-4 ml-auto">
                <p className=" text-black rounded flex text-xl items-center "> Stay AI Xin Chào, {user ? user.username : ""} ! </p>
                <div className="relative">
                    <button
                        className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 flex items-center"

                    > Danh mục <svg
                        className="w-4 h-4 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 bg-white shadow-md rounded mt-2 py-2 w-40">
                            <Link to="/tenantmanage" onClick={handleSelect} className="block px-4 py-2 hover:bg-gray-100">Quản lý khách thuê </Link>
                            <Link to="/manageroom" onClick={handleSelect} className="block px-4 py-2 hover:bg-gray-100">Quản lý phòng trọ</Link>
                            <Link to="/manageincome" onClick={handleSelect} className="block px-4 py-2 hover:bg-gray-100">Quản lý thu chi</Link>
                            <Link to="/profile" onClick={handleSelect} className="block px-4 py-2 hover:bg-gray-100">Hồ sơ cá nhân</Link>
                            <Link to="/" onClick={logout} className="block px-4 py-2 hover:bg-gray-100">Đăng xuất </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};
export default SideBar;