import { useState } from "react";
import SideBars from "../SideBars/SideBars";
import {  FaSearch, FaDownload, FaInfoCircle } from "react-icons/fa";

const ManageInvoices = () => {
  const [contracts] = useState([
    { id: 1, room: "Tháng 2/2024", amount: "3.000.000 VND", status: "Chưa thanh toán" },
    { id: 2, room: "Tháng 1/2024", amount: "3.000.000 VND", status: "Đã thanh toán" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const getStatusStyle = (status) => {
    switch (status) {
      case "Đã thanh toán": return "text-green-600 flex items-center font-semibold";
      case "Chưa thanh toán": return "text-red-600 flex items-center font-semibold";
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
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Quản Lý Hóa Đơn</h2>
        
        <div className="mb-4 flex justify-between items-center">
          <div className="relative w-1/3">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm hóa đơn..."
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
            <option value="Đã thanh toán">Đã thanh toán</option>
            <option value="Chưa thanh toán">Chưa thanh toán</option>
          </select>
        </div>
        
        <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="border p-3">Tháng</th>
              <th className="border p-3">Số Tiền</th>
              <th className="border p-3">Trạng Thái</th>
              <th className="border p-3">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {filteredContracts.map((contract) => (
              <tr key={contract.id} className="text-center bg-white hover:bg-gray-100 transition">
                <td className="border p-3">{contract.room}</td>
                <td className="border p-3">{contract.amount}</td>
                <td className={`border p-3 ${getStatusStyle(contract.status)}`}>{contract.status}</td>
                <td className="border p-3 flex justify-center gap-2">
                  {contract.status === "Chưa thanh toán" && (
                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">
                      Thanh toán
                    </button>
                  )}
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
                    <FaDownload />
                  </button>
                  <button className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition">
                    <FaInfoCircle />
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

export default ManageInvoices;
