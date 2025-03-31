import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { fetchData } from "../../api";
import SideBar from "../../Components/SideBar/SideBar";

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
    <>
      <SideBar />
    <div>

    


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
    </>
  );
};

export default HomePages;