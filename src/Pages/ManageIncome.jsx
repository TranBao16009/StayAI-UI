import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import SideBar from "../Components/SideBar/SideBar";

const Card = ({ children }) => <div className="border rounded-lg shadow p-4">{children}</div>;
const CardContent = ({ children }) => <div>{children}</div>;
const Button = ({ children, className, ...props }) => (
    <button className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`} {...props}>
      {children}
    </button>
);
const Input = (props) => <input className="border rounded px-2 py-1 w-full" {...props} />;
const Table = ({ children }) => <table className="w-full border">{children}</table>;
const TableHeader = ({ children }) => <thead className="bg-gray-200">{children}</thead>;
const TableRow = ({ children }) => <tr className="border">{children}</tr>;
const TableHead = ({ children }) => <th className="p-2 border">{children}</th>;
const TableBody = ({ children }) => <tbody>{children}</tbody>;
const TableCell = ({ children }) => <td className="p-2 border">{children}</td>;

const data = [
  { date: "01-03", income: 5000000, expense: 2000000 },
  { date: "02-03", income: 7000000, expense: 3000000 },
  { date: "03-03", income: 6000000, expense: 2500000 },
];

export default function ExpenseManagement() {
  const [transactions, setTransactions] = useState([
    { id: 1, date: "2025-03-01", type: "Thu", amount: 5000000, note: "Tiền thuê phòng" },
    { id: 2, date: "2025-03-02", type: "Chi", amount: 2000000, note: "Tiền điện nước" },
  ]);

  const [newTransaction, setNewTransaction] = useState({
    date: "",
    type: "Thu",
    amount: "",
    note: ""
  });

  const [editingTransaction, setEditingTransaction] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleAddTransaction = () => {
    setTransactions([...transactions, { ...newTransaction, id: transactions.length + 1, amount: parseInt(newTransaction.amount) }]);
    setNewTransaction({ date: "", type: "Thu", amount: "", note: "" });
  };

  const handleEditTransaction = (transaction) => {
    setEditingTransaction(transaction);
    setNewTransaction(transaction);
  };

  const handleUpdateTransaction = () => {
    setTransactions(transactions.map(t => t.id === editingTransaction.id ? newTransaction : t));
    setEditingTransaction(null);
    setNewTransaction({ date: "", type: "Thu", amount: "", note: "" });
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const totalIncome = transactions.filter(t => t.type === "Thu").reduce((acc, t) => acc + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === "Chi").reduce((acc, t) => acc + t.amount, 0);

  return (
    <>
      <SideBar />
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Quản lý thu chi</h1>


        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Tổng kết</h2>
            <div className="flex justify-between">
              <div className="text-green-500">Tổng thu: {totalIncome.toLocaleString()} đ</div>
              <div className="text-red-500">Tổng chi: {totalExpense.toLocaleString()} đ</div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Biểu đồ tài chính</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="income" stroke="#22c55e" strokeWidth={2} />
                <Line type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

    
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Danh sách giao dịch</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ngày</TableHead>
                  <TableHead>Loại</TableHead>
                  <TableHead>Số tiền</TableHead>
                  <TableHead>Ghi chú</TableHead>
                  <TableHead>Hành động</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((t) => (
                  <TableRow key={t.id}>
                    <TableCell>{t.date}</TableCell>
                    <TableCell className={t.type === "Thu" ? "text-green-500" : "text-red-500"}>{t.type}</TableCell>
                    <TableCell>{t.amount.toLocaleString()} đ</TableCell>
                    <TableCell>{t.note}</TableCell>
                    <TableCell>
                      <Button className="bg-yellow-500 mr-2" onClick={() => handleEditTransaction(t)}>Sửa</Button>
                      <Button className="bg-red-500" onClick={() => handleDeleteTransaction(t.id)}>Xóa</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">{editingTransaction ? "Cập nhật giao dịch" : "Thêm giao dịch mới"}</h2>
            <div className="space-y-4">
              <Input
                type="date"
                name="date"
                value={newTransaction.date}
                onChange={handleInputChange}
                placeholder="Ngày"
              />
              <select
                name="type"
                value={newTransaction.type}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 w-full"
              >
                <option value="Thu">Thu</option>
                <option value="Chi">Chi</option>
              </select>
              <Input
                type="number"
                name="amount"
                value={newTransaction.amount}
                onChange={handleInputChange}
                placeholder="Số tiền"
              />
              <Input
                type="text"
                name="note"
                value={newTransaction.note}
                onChange={handleInputChange}
                placeholder="Ghi chú"
              />
              {editingTransaction ? (
                <Button onClick={handleUpdateTransaction}>Cập nhật giao dịch</Button>
              ) : (
                <Button onClick={handleAddTransaction}>Thêm giao dịch</Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}