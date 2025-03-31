import { useEffect, useState } from "react";
import SideBars from "../SideBars/SideBars";
import { FaSearch } from "react-icons/fa";
import ConfirmDialog from "../Dialog/Dialog";
const ManageInvoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [invoiceToPay, setInvoiceToPay] = useState(null); 
  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const res = await fetch('/api/invoices');
      const data = await res.json();
      setInvoices(data);
    } catch (err) {
      console.error("Lỗi tải hóa đơn:", err);
    }
  };

  const handlePay = async (id) => {
    try {
      const res = await fetch(`/api/invoices/${id}/pay`, { method: 'POST' });
      const updated = await res.json();
      setInvoices(invoices.map(inv => inv.id === id ? updated : inv));
      setShowConfirm(false);
    } catch (err) {
      console.error("Lỗi thanh toán:", err);
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Đã thanh toán": return "text-green-600 flex items-center font-semibold";
      case "Chưa thanh toán": return "text-red-600 flex items-center font-semibold";
      default: return "text-gray-600";
    }
  };

  const filteredContracts = invoices.filter(contract =>
    contract.month.toLowerCase().includes(searchTerm.toLowerCase()) &&
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
            {filteredContracts.map((invoice) => (
              <tr key={invoice.id} className="text-center bg-white hover:bg-gray-100 transition">
                <td className="border p-3">{invoice.month}</td>
                <td className="border p-3">{invoice.amount.toLocaleString()} đ</td>
                <td className={`border p-3 ${getStatusStyle(invoice.status)}`}>{invoice.status}</td>
                <td className="border p-3 flex justify-center gap-2">
                  {invoice.status === "Chưa thanh toán" && (
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                      onClick={() => {
                        setInvoiceToPay(invoice);       
                        setShowConfirm("pay");          
                      }}
                    >
                      Thanh toán
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmDialog
        show={showConfirm === "pay"}
        title="Xác nhận thanh toán"
        message="Hành động này không thể hoàn tác. Bạn có chắc chắn muốn thanh toán?"
        onConfirm={() => handlePay(invoiceToPay.id)} 
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
};

export default ManageInvoices;