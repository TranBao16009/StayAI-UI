import { useState } from "react";
import SideBars from "../SideBars/SideBars";
import { FaClock, FaCheckCircle, FaTimesCircle, FaSearch, FaInfoCircle, FaBell, FaEdit, FaTrash } from "react-icons/fa";

const ContractManagement = () => {
  const [contracts, setContracts] = useState([
    { id: 1, room: "Phòng 101", startDate: "2024-01-01", endDate: "2025-01-01", rent: "3.000.000 VND", status: "Đang hiệu lực" },
    { id: 2, room: "Phòng 202", startDate: "2023-06-01", endDate: "2024-06-01", rent: "3.500.000 VND", status: "Sắp hết hạn" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const getStatusStyle = (status) => {
    switch (status) {
      case "Đang hiệu lực": return "text-green-600 flex items-center font-semibold";
      case "Sắp hết hạn": return "text-yellow-600 flex items-center font-semibold";
      case "Hết hạn": return "text-red-600 flex items-center font-semibold";
      default: return "text-gray-600";
    }
  };

  const filteredContracts = contracts.filter(contract =>
    contract.room.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterStatus === "" || contract.status === filterStatus)
  );

  return (
    <>
      <SideBars />
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Quản Lý Hợp Đồng Cá Nhân</h2>
        
        <div className="mb-4 flex justify-between items-center">
          <div className="relative w-1/3">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm hợp đồng..."
              className="border p-2 pl-10 rounded w-full focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="border p-2 rounded"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">Tất cả</option>
            <option value="Đang hiệu lực">Đang hiệu lực</option>
            <option value="Sắp hết hạn">Sắp hết hạn</option>
          </select>
        </div>
        
        <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="border p-3">Phòng</th>
              <th className="border p-3">Ngày Bắt Đầu</th>
              <th className="border p-3">Ngày Kết Thúc</th>
              <th className="border p-3">Giá Thuê</th>
              <th className="border p-3">Trạng Thái</th>
              <th className="border p-3">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {filteredContracts.map((contract) => (
              <tr key={contract.id} className="text-center bg-white hover:bg-gray-100 transition">
                <td className="border p-3">{contract.room}</td>
                <td className="border p-3">{contract.startDate}</td>
                <td className="border p-3">{contract.endDate}</td>
                <td className="border p-3">{contract.rent}</td>
                <td className={`border p-3 ${getStatusStyle(contract.status)}`}>{contract.status}</td>
                <td className="border p-3 flex justify-center gap-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                    <FaInfoCircle />
                  </button>
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">
                    <FaEdit />
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                    <FaTrash />
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

export default ContractManagement;
