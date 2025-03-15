// import { useState } from "react";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// const Card = ({ children }) => <div className="border rounded-lg shadow p-4">{children}</div>;
// const CardContent = ({ children }) => <div>{children}</div>;
// const Button = ({ children, className, ...props }) => (
//     <button className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`} {...props}>
//       {children}
//     </button>
//   );
//   const Input = (props) => <input className="border rounded px-2 py-1 w-full" {...props} />;
//   const Table = ({ children }) => <table className="w-full border">{children}</table>;
// const TableHeader = ({ children }) => <thead className="bg-gray-200">{children}</thead>;
// const TableRow = ({ children }) => <tr className="border">{children}</tr>;
// const TableHead = ({ children }) => <th className="p-2 border">{children}</th>;
// const TableBody = ({ children }) => <tbody>{children}</tbody>;
// const TableCell = ({ children }) => <td className="p-2 border">{children}</td>;

// const data = [
//   { date: "01-03", income: 5000000, expense: 2000000 },
//   { date: "02-03", income: 7000000, expense: 3000000 },
//   { date: "03-03", income: 6000000, expense: 2500000 },
// ];

// export default function ExpenseManagement() {
//   const [transactions, setTransactions] = useState([
//     { id: 1, date: "2025-03-01", type: "Thu", amount: 5000000, note: "Tiền thuê phòng" },
//     { id: 2, date: "2025-03-02", type: "Chi", amount: 2000000, note: "Tiền điện nước" },
//   ]);

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl font-bold">Quản lý thu chi</h1>
      
//       {/* Biểu đồ thu chi */}
//       <Card>
//         <CardContent>
//           <h2 className="text-xl font-semibold mb-4">Biểu đồ tài chính</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="income" stroke="#22c55e" strokeWidth={2} />
//               <Line type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </CardContent>
//       </Card>
      
//       {/* Bảng thu chi */}
//       <Card>
//         <CardContent>
//           <h2 className="text-xl font-semibold mb-4">Danh sách giao dịch</h2>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Ngày</TableHead>
//                 <TableHead>Loại</TableHead>
//                 <TableHead>Số tiền</TableHead>
//                 <TableHead>Ghi chú</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {transactions.map((t) => (
//                 <TableRow key={t.id}>
//                   <TableCell>{t.date}</TableCell>
//                   <TableCell className={t.type === "Thu" ? "text-green-500" : "text-red-500"}>{t.type}</TableCell>
//                   <TableCell>{t.amount.toLocaleString()} đ</TableCell>
//                   <TableCell>{t.note}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
      
//       {/* Nút thêm giao dịch */}
//       <Button className="bg-blue-500 text-white">Thêm giao dịch</Button>
//     </div>
//   );
// }
