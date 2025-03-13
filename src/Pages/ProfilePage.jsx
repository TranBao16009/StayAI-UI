import { useState } from "react";
import { FaRegBell, FaUserCircle, FaRegCreditCard, FaHome, FaClipboardList } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { RiLuggageCartFill } from "react-icons/ri";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { name: "Tổng quan", icon: <FaHome />, tab: "dashboard" },
    { name: "Khách thuê", icon: <HiOutlineUsers />, tab: "tenants" },
    { name: "Phòng trọ", icon: <FaClipboardList />, tab: "rooms" },
    { name: "Thu chi", icon: <FaRegCreditCard />, tab: "finance" },
  ];

  return (
    <div className="w-64 h-screen bg-gray-100 p-4 flex flex-col">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">🏠 Quản lý trọ</h2>
      {menuItems.map((item) => (
        <div
          key={item.tab}
          className={`flex items-center p-3 rounded-lg cursor-pointer transition-all hover:bg-gray-200 ${
    activeTab === item.tab ? "bg-gray-300" : ""
  }`}
          onClick={() => setActiveTab(item.tab)}
        >
          <span className="text-lg mr-3">{item.icon}</span>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="p-6 w-full">
      <h2 className="text-3xl font-bold mb-4">Tổng quan</h2>
      <div className="grid grid-cols-3 gap-4">
        <Card title="Tin đăng" value="0 tin" desc="Đang hiển thị" />
        <Card title="Khách thuê" value="0 người" desc="Mới hôm nay" />
        <Card title="Số dư tài khoản" value="0 đ" desc="Tài khoản chính" />
      </div>
    </div>
  );
};

const Card = ({ title, value, desc }) => (
  <div className="bg-white p-4 shadow rounded-lg border border-gray-200">
    <h3 className="text-xl font-semibold mb-1">{title}</h3>
    <p className="text-2xl font-bold text-blue-600">{value}</p>
    <p className="text-gray-500">{desc}</p>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-6">{activeTab === "dashboard" && <Dashboard />}</div>
    </div>
  );
}
