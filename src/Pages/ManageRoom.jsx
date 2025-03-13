import React from 'react'

const ManageIncome = () => {
  const transactions = [
    { id: 1, type: "Thu", amount: 2000000, description: "Tiền thuê phòng 101" },
    { id: 2, type: "Chi", amount: 500000, description: "Sửa chữa điện nước" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Quản lý thu chi</h1>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Loại</th>
            <th className="p-3 text-left">Số tiền</th>
            <th className="p-3 text-left">Mô tả</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-t">
              <td className={`p-3 font-bold ${transaction.type === "Thu" ? "text-green-500" : "text-red-500"}`}>
                {transaction.type}
              </td>
              <td className="p-3">{transaction.amount.toLocaleString()} VND</td>
              <td className="p-3">{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageIncome;

