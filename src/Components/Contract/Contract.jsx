import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import { FaClock, FaCheckCircle, FaTimesCircle, FaSearch, FaPlus } from "react-icons/fa";

const Contract = () => {
  const [contracts, setContracts] = useState([
    { id: 1, room: "Phòng 101", startDate: "2024-01-01", endDate: "2025-01-01", rent: "3.000.000 VND", status: "Đang hiệu lực" },
    { id: 2, room: "Phòng 202", startDate: "2023-06-01", endDate: "2024-06-01", rent: "3.500.000 VND", status: "Sắp hết hạn" },
    { id: 3, room: "Phòng 303", startDate: "2024-02-01", endDate: "2025-02-01", rent: "3.800.000 VND", status: "Đang hiệu lực" },
    { id: 4, room: "Phòng 404", startDate: "2023-09-01", endDate: "2024-09-01", rent: "4.000.000 VND", status: "Sắp hết hạn" },
    { id: 5, room: "Phòng 505", startDate: "2024-03-01", endDate: "2025-03-01", rent: "4.200.000 VND", status: "Đang hiệu lực" },
    { id: 6, room: "Phòng 606", startDate: "2023-11-01", endDate: "2024-11-01", rent: "3.900.000 VND", status: "Sắp hết hạn" },
    { id: 7, room: "Phòng 707", startDate: "2024-04-01", endDate: "2025-04-01", rent: "3.700.000 VND", status: "Đang hiệu lực" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Đang hiệu lực": return "text-green-600 flex items-center";
      case "Sắp hết hạn": return "text-yellow-600 flex items-center";
      case "Hết hạn": return "text-red-600 flex items-center";
      default: return "text-gray-600";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Đang hiệu lực": return <FaCheckCircle className="ml-1" />;
      case "Sắp hết hạn": return <FaClock className="ml-1" />;
      case "Hết hạn": return <FaTimesCircle className="ml-1" />;
      default: return null;
    }
  };

  const filteredContracts = contracts.filter(contract =>
    contract.room.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addNewContract = () => {
    const newContract = {
      id: contracts.length + 1,
      room: `Phòng ${contracts.length + 101}`,
      startDate: "2024-07-01",
      endDate: "2025-07-01",
      rent: "3.200.000 VND",
      status: "Đang hiệu lực"
    };
    setContracts([...contracts, newContract]);
    setShowForm(false);
  };

  return (
    <>
      <SideBar />
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Quản Lý Hợp Đồng</h2>
        
        <div className="mb-4 flex justify-between items-center">
          <div className="relative w-1/3">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm hợp đồng..."
              className="border p-2 pl-10 rounded w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            className="bg-blue-500 text-white px-3 py-2 rounded flex items-center"
            onClick={() => setShowForm(true)}
          >
            <FaPlus className="mr-2" /> Thêm Hợp Đồng
          </button>
        </div>
        
        {showForm && (
          <div className="p-4 bg-gray-100 rounded mb-4">
            <h3 className="text-lg font-semibold">Thêm hợp đồng mới</h3>
            <button className="bg-green-500 text-white px-3 py-1 rounded mt-2" onClick={addNewContract}>Lưu</button>
            <button className="bg-red-500 text-white px-3 py-1 rounded ml-2 mt-2" onClick={() => setShowForm(false)}>Hủy</button>
          </div>
        )}
        
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Phòng</th>
              <th className="border p-2">Ngày Bắt Đầu</th>
              <th className="border p-2">Ngày Kết Thúc</th>
              <th className="border p-2">Giá Thuê</th>
              <th className="border p-2">Trạng Thái</th>
              <th className="border p-2">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {filteredContracts.map((contract) => (
              <tr key={contract.id} className="text-center">
                <td className="border p-2">{contract.room}</td>
                <td className="border p-2">{contract.startDate}</td>
                <td className="border p-2">{contract.endDate}</td>
                <td className="border p-2">{contract.rent}</td>
                <td className={`border p-2 ${getStatusStyle(contract.status)}`}>
                  {contract.status} {getStatusIcon(contract.status)}
                </td>
                <td className="border p-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600">
                    Gia hạn
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Kết thúc
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contract;