import { useState } from "react";
import SideBars from "../SideBars/SideBars";
const ManageInvoices = () => {
  const [bills, setBills] = useState([
    { id: 1, month: "Tháng 2/2024", amount: "3.000.000 VND", status: "Chưa thanh toán" },
    { id: 2, month: "Tháng 1/2024", amount: "3.000.000 VND", status: "Đã thanh toán" },
  ]);

  return (
    <>
        <SideBars/>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Quản Lý Hóa Đơn</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Tháng</th>
            <th className="border p-2">Số Tiền</th>
            <th className="border p-2">Trạng Thái</th>
            <th className="border p-2">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id} className="text-center">
              <td className="border p-2">{bill.month}</td>
              <td className="border p-2">{bill.amount}</td>
              <td className={`border p-2 ${bill.status === "Đã thanh toán" ? "text-green-600" : "text-red-600"}`}>
                {bill.status}
              </td>
              <td className="border p-2">
                {bill.status === "Chưa thanh toán" ? (
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Thanh toán</button>
                ) : (
                  <span className="text-gray-500">✔ Đã thanh toán</span>
                )}
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
