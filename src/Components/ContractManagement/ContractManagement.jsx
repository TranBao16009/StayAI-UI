import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Sử dụng react-router-dom để chuyển hướng
import SideBars from "../SideBars/SideBars";

export default function ContractManagement() {
  const [contract, setContract] = useState({
    id: 1,
    room: "101",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    rent: "3.300.000",
    status: "Đang thuê",
  });

  const navigate = useNavigate(); // Hook để chuyển hướng

  const handleCancelContract = () => {
    if (window.confirm("Bạn có chắc chắn muốn hủy hợp đồng này?")) {
      // Chuyển hướng đến trang xử lý hủy hợp đồng
      navigate(`/cancel`, { state: { contract } });
    }
  };

  return (
    <>
      <SideBars />
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">Quản lý Hợp Đồng Cá Nhân</h2>
        <hr className="mb-6 border-gray-300" />

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Thông tin hợp đồng</h3>
          <table className="w-full border rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 text-left">Số phòng</th>
                <th className="p-2 text-left">Ngày bắt đầu</th>
                <th className="p-2 text-left">Ngày kết thúc</th>
                <th className="p-2 text-left">Giá thuê</th>
                <th className="p-2 text-left">Trạng thái</th>
                <th className="p-2 text-left">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100">
                <td className="p-2">{contract.room}</td>
                <td className="p-2">{contract.startDate}</td>
                <td className="p-2">{contract.endDate}</td>
                <td className="p-2">{contract.rent}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 text-white text-sm rounded ${
                      contract.status === "Đang thuê"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {contract.status}
                  </span>
                </td>
                <td className="p-2">
                  {contract.status === "Đang thuê" && (
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={handleCancelContract}
                    >
                      Hủy hợp đồng
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}