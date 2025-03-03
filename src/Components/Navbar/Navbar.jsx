import React, { useState } from "react";
import "./Navbar.css";  
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">Stay AI</h2>
      </div>
      <div className="navbar-menu">
        <li><Link to="/">Trang chủ</Link></li>
        <li><Link to="/">Phòng trọ cho thuê </Link></li>
        <li><Link to="/pricing">Bảng giá</Link></li>
        <li><Link to="/experience">Kinh nghiệm</Link></li>
        <li><Link to="/news">Tin tức</Link></li>
        <li><Link to="/guide">Hướng dẫn</Link></li>
        <li><Link to="/contact">Liên hệ</Link></li>
      </div>
      <div className="navbar-right">
        <Link to='/login'><button className="btn login-btn"> Đăng nhập</button></Link>
        <div>
          <button 
            id="dropdownDefaultButton" 
            data-dropdown-toggle="dropdown" 
            className="text-white btn login-btn hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
            type="button"
            onClick={toggleDropdown}
          >
            Đăng ký
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          {dropdownOpen && (
            <div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <Link to='/register'><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cá nhân</a></Link>
                </li>
                <li>
                  <Link to='/registers'><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Chủ hộ</a></Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;