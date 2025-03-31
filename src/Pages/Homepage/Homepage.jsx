import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
// import ConfirmDialog from "../../Components/Dialog/Dialog";
// import SideBar from "../../Components/SideBar/SideBar";
import SideBars from "../../Components/SideBars/SideBars";

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

const HomePage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [searchCity, setSearchCity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const { user, logout } = useContext(ShopContext);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelect = () => {
    setDropdownOpen(false);
  };

  // const handleGoToHomes = () => {
  //   if ( user?.role === "owner") {
  //     navigate("/homes");
  //   } else {
  //     setShowDialog(true);
  //   }
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
    const shuffledRooms = shuffleArray(roomsData);
    setRooms(shuffledRooms);
    setFilteredRooms(shuffledRooms);
  }, []);

  const handleSearch = () => {
    const filtered = rooms.filter((room) => {
      const matchesCity = searchCity ? room.city.toLowerCase().includes(searchCity.toLowerCase()) : true;
      const matchesMinPrice = minPrice ? room.price >= parseInt(minPrice) : true;
      const matchesMaxPrice = maxPrice ? room.price <= parseInt(maxPrice) : true;
      return matchesCity && matchesMinPrice && matchesMaxPrice;
    });
    setFilteredRooms(filtered);
  };

  const uniqueCities = [...new Set(roomsData.map(room => room.city))];

  return (
    <>
      <SideBars />
    <div>
   

      <main className="p-8">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với Stay AI</h1>
        <p className="text-lg mb-6">
          Dưới đây là các phòng trọ có sẵn được hiển thị ngẫu nhiên:
        </p>

        <div className="bg-white p-4 rounded-lg shadow mb-8">
  <h2 className="text-lg font-semibold mb-4 text-gray-800">🔍 Tìm kiếm phòng trọ</h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    <select
      value={searchCity}
      onChange={(e) => setSearchCity(e.target.value)}
      className="border rounded px-3 py-2 w-full"
    >
      <option value="">🌍 Tất cả khu vực</option>
      {uniqueCities.map((city) => (
        <option key={city} value={city}>{city}</option>
      ))}
    </select>
    <input
      type="number"
      placeholder="💵 Giá tối thiểu"
      value={minPrice}
      onChange={(e) => setMinPrice(e.target.value)}
      className="border rounded px-3 py-2 w-full"
    />
    <input
      type="number"
      placeholder="💰 Giá tối đa"
      value={maxPrice}
      onChange={(e) => setMaxPrice(e.target.value)}
      className="border rounded px-3 py-2 w-full"
    />
    <button
      onClick={handleSearch}
      className="bg-teal-600 text-white rounded px-4 py-2 hover:bg-teal-700 transition w-full"
    >
      🔎 Tìm kiếm
    </button>
  </div>
</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredRooms.map((room) => (
            <div key={room.id} className="border rounded p-4 shadow-md">
              <img
                src={room.imageUrl}
                alt={room.name}
                className="w-full h-48 object-cover mb-2"
              />
              <h3 className="text-xl font-bold">{room.name}</h3>
              <p className="text-gray-600">{room.description}</p>
              <p className="text-gray-600">Giá: {room.price.toLocaleString()} VND</p>
            </div>
          ))}
        </div>
      </main>

    
    </div>
    </>
  );
};

export default HomePage;
