import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const HomePage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  const { user, logout } = useContext(ShopContext);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleSelect = () => {
    setDropdownOpen(false);
  };
  const handleGoToHomes = () => {
    if (user && user.role === "owner") {
      navigate("/homes");
    } else {
      alert("Bạn không phải là chủ hộ. Vui lòng đăng ký hoặc đăng nhập.");
      navigate("/login"); // Điều hướng đến trang đăng nhập
    }
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    fetch('/api/allRoom')
      .then((res) => res.json())
      .then((data) => setRooms(shuffleArray(data)))
  }, []);

  return (
    <div>
      
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-3xl font-bold text-teal-600 mr-8">Stay AI</div>
        <div className="flex space-x-6 items-center">
          <Link to="/" className="hover:underline flex items-center">
            <span className="ml-1">•</span>Trang chủ
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
          <p className="text-black text-xl">Stay AI Xin Chào, {user ? user.username : ""}!</p>

          <button
            onClick={handleGoToHomes}
            className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
          >
            Chủ hộ
          </button>

          <div className="relative">
            <button
              className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 flex items-center"
              onClick={toggleDropdown}
            >
              Danh mục
              <svg className="w-4 h-4 ml-2" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 bg-white shadow-md rounded mt-2 py-2 w-40">
                <Link to="/contract" onClick={handleSelect} className="block px-4 py-2 hover:bg-gray-100">Quản lý hợp đồng</Link>
                <Link to="/invoices" onClick={handleSelect} className="block px-4 py-2 hover:bg-gray-100">Quản lý hóa đơn</Link>
                <Link to="/profiles" onClick={handleSelect} className="block px-4 py-2 hover:bg-gray-100">Thông tin cá nhân</Link>
                <Link to="/" onClick={logout} className="block px-4 py-2 hover:bg-gray-100">Đăng xuất</Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="p-8">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với Stay AI</h1>
        <p className="text-lg mb-6">
          Dưới đây là các phòng trọ có sẵn được hiển thị ngẫu nhiên:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {rooms.map((room) => {
            const imageUrl = require(`../../Assets/${room.imageUrl}`);

            return (
              <div key={room.id} className="border rounded p-4 shadow-md">
                <img
                  src={imageUrl}
                  alt={room.name}
                  className="w-full h-48 object-cover mb-2"
                />
                <h3 className="text-xl font-bold">{room.name}</h3>
                <p className="text-gray-600">{room.description}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default HomePage;