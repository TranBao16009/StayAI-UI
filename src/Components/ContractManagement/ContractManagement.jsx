import { useState } from "react";
import SideBars from "../SideBars/SideBars";
const ContractManage = () => {
  const [contracts, setContracts] = useState([
    { id: 1, room: "Phòng 101", startDate: "2024-01-01", endDate: "2025-01-01", rent: "3.000.000 VND", status: "Đang hiệu lực" },
    { id: 2, room: "Phòng 202", startDate: "2023-06-01", endDate: "2024-06-01", rent: "3.500.000 VND", status: "Sắp hết hạn" },
  ]);

  return (
    <>
        <SideBars/>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Quản Lý Hợp Đồng</h2>
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
          {contracts.map((contract) => (
            <tr key={contract.id} className="text-center">
              <td className="border p-2">{contract.room}</td>
              <td className="border p-2">{contract.startDate}</td>
              <td className="border p-2">{contract.endDate}</td>
              <td className="border p-2">{contract.rent}</td>
              <td className="border p-2 text-blue-600">{contract.status}</td>
              <td className="border p-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600">Gia hạn</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Kết thúc</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default ContractManage;
