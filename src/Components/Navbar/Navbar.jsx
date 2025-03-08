import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
   
      <div className="bg-gray-100 text-gray-700 text-sm flex justify-between items-center p-2 px-6">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><span>📍</span> Số 12 Quang Trung, Phường 12  , Q.Gò Vấp , TP Hồ Chí Minh.</span>
          <span className="flex items-center gap-1"><span>✉️</span> stayal@bb.vn</span>
          <span className="flex items-center gap-1"><span>📞</span> 0707320581</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-blue-600 hover:underline">Điều khoản sử dụng</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-red-600 hover:underline">Chính sách bảo mật</a>
        </div>
      </div>
      
   
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-3xl font-bold text-teal-600 mr-8">Stay AI</div>
        <div className="flex space-x-6 items-center">
        <Link to="/" className="hover:underline flex items-center"><span className="ml-1">•</span>Trang chủ</Link>
          <Link to="/rooms" className="hover:underline flex items-center"><span className="ml-1">•</span>Phòng trọ</Link>
          <Link to="/pricing" className="hover:underline flex items-center"><span className="ml-1">•</span>Bảng giá</Link>
          <Link to="/news" className="hover:underline flex items-center"><span className="ml-1">•</span>Tin tức</Link>
          <Link to="/contact" className="hover:underline flex items-center"><span className="ml-1">•</span>Liên hệ</Link>
        </div>
       
        <div className="flex items-center space-x-4 ml-auto">
          <Link to='/login'><button className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">Đăng nhập</button></Link>
          <div className="relative">
            <button 
              className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 flex items-center" 
              onClick={toggleDropdown}
            >
              Đăng ký
              <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 bg-white shadow-md rounded mt-2 py-2 w-40">
                <Link to='/register' className="block px-4 py-2 hover:bg-gray-100">Cá nhân</Link>
                <Link to='/registers' className="block px-4 py-2 hover:bg-gray-100">Chủ hộ</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
