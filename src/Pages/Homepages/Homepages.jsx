import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { fetchData } from "../../api";

const roomsData = [
  {
    id: 1,
    name: "Phòng trọ quận 7, nhiều cơ sở từ 2tr8",
    description: "Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TPHCM",
    city: "TPHCM",
    price: 2800000,
    imageUrl: require("../../Assets/tro1.jpg"),
  },
  {
    id: 2,
    name: "Phòng Studio Mới Toanh ngay Chung Cư LACASA Q.7",
    description: "Hoàng Quốc Việt, Phường Phú Thuận, Quận 7, TPHCM",
    city: "TPHCM",
    price: 3500000,
    imageUrl: require("../../Assets/tro2.webp"),
  },
  {
    id: 3,
    name: "💥 Phòng Mới Xây Full Tiện Nghi-ngay khu K300",
    description: "Nguyễn Thái Bình, Phường 12, Quận Tân Bình, TPHCM",
    city: "TPHCM",
    price: 4000000,
    imageUrl: require("../../Assets/tro3.webp"),
  },
  {
    id: 4,
    name: "Phòng Gác Lửng Thoáng Mát — 5p đi AEON Mall Tân Phú",
    description: "Độc Lập, Phường Tân Quý, Quận Tân Phú, TPHCM",
    city: "TPHCM",
    price: 3000000,
    imageUrl: require("../../Assets/tro4.jpg"),
  },
  {
    id: 5,
    name: "🌿Phòng Đẹp Đón Nắng Ngay Cầu Vượt Nguyễn Tri Phương",
    description: "Đường 3 Tháng 2, Phường 14, Quận 10, TPHCM",
    city: "TPHCM",
    price: 3200000,
    imageUrl: require("../../Assets/tro5.webp"),
  },
  {
    id: 6,
    name: "🍀Hé Lộ Siêu Phẩm Căn Hộ Sang Trọng Lý Chính Thắng... 🍀🍀",
    description: "Lý Chính Thắng, Phường 7, Quận 3, TPHCM",
    city: "TPHCM",
    price: 3200000,
    imageUrl: require("../../Assets/tro6.jpg"),
  },
  {
    id: 7,
    name: "Phòng trọ mới xây gần Đại học Quốc gia",
    description: "Đường Linh Trung, Phường Linh Trung, Quận Thủ Đức, TPHCM",
    city: "TPHCM",
    price: 2500000,
    imageUrl: require("../../Assets/tro7.jpg"),
  }
];

const HomePages = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [rooms, setRooms] = useState([]);

  const handleSelect = () => {
    setDropdownOpen(false);
  };
  const { user, logout } = useContext(ShopContext);


  // const toggleDropdown = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    fetchData('/api/allRoom')
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  return (
    <div>

      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-3xl font-bold text-teal-600 mr-8">Stay AI</div>
        <div className="flex space-x-6 items-center">
          <Link to="/" className="hover:underline flex items-center">
            <span className="ml-1">•</span>Trang chủ
          </Link>
          {/* <Link to="/rooms" className="hover:underline flex items-center">
            <span className="ml-1">•</span>Phòng trọ
          </Link> */}
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
      onClick={() => setDropdownOpen(!dropdownOpen)}
      className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 flex items-center"
    >
      Danh mục 
      <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
      </svg>
    </button>
    {dropdownOpen && (
      <div className="absolute right-0 bg-white shadow-md rounded mt-2 py-2 w-40">
        <Link to="/tenantmanage" onClick={handleSelect} className="block px-4 py-2 hover:bg-gray-100">Quản lý khách thuê </Link>
        <Link to="/contracts" onClick={handleSelect} className="block px-4 py-2 hover:bg-gray-100">Quản lý hợp đồng </Link>
        <Link to="/manageroom" onClick={handleSelect} className="block px-4 py-2 hover:bg-gray-100">Quản lý phòng trọ</Link>
        <Link to="/manageincome" onClick={handleSelect} className="block px-4 py-2 hover:bg-gray-100">Quản lý thu chi</Link>
        <Link to="/profile" onClick={handleSelect} className="block px-4 py-2 hover:bg-gray-100">Hồ sơ cá nhân</Link>
        <Link to="/" onClick={logout} className="block px-4 py-2 hover:bg-gray-100">Đăng xuất </Link>
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

        {/* Hiển thị danh sách phòng theo dạng grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {rooms.map((room) => (
            <div key={room.id} className="border rounded p-4 shadow-md">
              <img
                src={room.imageUrl}
                alt={room.name}
                className="w-full h-48 object-cover mb-2"
              />
              <h3 className="text-xl font-bold">{room.name}</h3>
              <p className="text-gray-600">{room.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePages;