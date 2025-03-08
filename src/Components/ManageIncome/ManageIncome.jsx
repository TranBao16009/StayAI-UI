import { useState } from "react";
import { Card, CardContent } from "../../Components/ui/card";
import { Button } from "../../Components/ui/button";
import { MoreVertical, Download, Search } from "lucide-react";

const transactions = [
  { id: "#123412451", date: "June 1, 2020", recipient: "Jordyn", amount: "$128.89", type: "Income", location: "Bangladesh, India", status: "Canceled" },
  { id: "#123412451", date: "June 1, 2020", recipient: "Marcus", amount: "$783.22", type: "Income", location: "Medan, Indonesia", status: "Pending" },
  { id: "#123412451", date: "June 1, 2020", recipient: "Clown Studio", amount: "$560.67", type: "Outcome", location: "London, England", status: "Outcome" },
  { id: "#123412451", date: "June 1, 2020", recipient: "Brandon", amount: "$128.89", type: "Income", location: "Bangladesh, India", status: "Completed" },
];

export default function ManageIncome() {
  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Transactions</h2>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={16} />
            <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border rounded-md" />
          </div>
          <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
            <Download size={16} /> Download PDF
          </Button>
        </div>
      </div>
      <Card>
        <CardContent className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Số thứ tự </th>
                <th className="p-3 text-left">Ngày tháng năm </th>
                <th className="p-3 text-left">Tên khách thuê </th>
                <th className="p-3 text-left">Tiền tháng </th>
                <th className="p-3 text-left">Kiểu chi </th>
                <th className="p-3 text-left">Mã phòng </th>
                <th className="p-3 text-left">Trạng thái </th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{txn.id}</td>
                  <td className="p-3">{txn.date}</td>
                  <td className="p-3">{txn.recipient}</td>
                  <td className="p-3 font-semibold">{txn.amount}</td>
                  <td className={`p-3 ${txn.type === "Income" ? "text-green-600" : "text-red-600"}`}>{txn.type}</td>
                  <td className="p-3">{txn.location}</td>
                  <td className={`p-3 text-sm font-medium ${txn.status === "Canceled" ? "text-red-500" : txn.status === "Pending" ? "text-yellow-500" : "text-green-500"}`}>{txn.status}</td>
                  <td className="p-3">
                    <MoreVertical className="cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
