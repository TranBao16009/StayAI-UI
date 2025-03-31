import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBars from "../SideBars/SideBars";
import ConfirmDialog from "../Dialog/Dialog";

export default function ContractManagement() {
  const [contracts, setContracts] = useState([]);
  const [newContract, setNewContract] = useState({ room: '', tenant: '', startDate: '', endDate: '', rent: '' });
  const [editingContract, setEditingContract] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [contractToCancel, setContractToCancel] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    try {
      const res = await fetch('/api/contracts');
      const data = await res.json();
      setContracts(data);
    } catch (err) {
      console.error("Lỗi tải hợp đồng cá nhân:", err);
    }
  };

  const handleCancelContract = async () => {
    if (!contractToCancel) return;
    try {
      await fetch(`/api/contracts/${contractToCancel.id}/cancel`, { method: 'POST' });
      setContracts(contracts.map(c => c.id === contractToCancel.id ? { ...c, status: "Đã hủy" } : c));
      setShowConfirm(false);
      setContractToCancel(null);
    } catch (err) {
      console.error("Lỗi hủy hợp đồng:", err);
    }
  };

  const handleDeleteContract = async () => {
    if (!deleteTarget) return;
    try {
      await fetch(`/api/contracts/${deleteTarget.id}`, { method: 'DELETE' });
      setContracts(contracts.filter(c => c.id !== deleteTarget.id));
      setDeleteTarget(null);
      setShowConfirm(false);
    } catch (err) {
      console.error("Lỗi xoá hợp đồng:", err);
    }
  };

  const handleAddOrUpdateContract = async () => {
    const payload = { ...newContract, rent: parseInt(newContract.rent), status: 'Đang thuê' };

    if (editingContract) {
      setContracts(contracts.map(c => c.id === editingContract.id ? { ...c, ...payload } : c));
      setEditingContract(null);
    } else {
      try {
        const res = await fetch('/api/contracts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const created = await res.json();
        setContracts([...contracts, created]);
      } catch (err) {
        console.error("Lỗi thêm hợp đồng:", err);
      }
    }

    setNewContract({ room: '', tenant: '', startDate: '', endDate: '', rent: '' });
  };

  const handleEdit = (contract) => {
    setEditingContract(contract);
    setNewContract(contract);
  };

  return (
    <>
      <SideBars />
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">Quản lý Hợp Đồng Cá Nhân</h2>
        <hr className="mb-6 border-gray-300" />

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">{editingContract ? 'Sửa hợp đồng' : 'Thêm hợp đồng mới'}</h3>
          <div className="grid grid-cols-2 gap-4">
            <input name="room" placeholder="Số phòng" className="border p-2" value={newContract.room} onChange={(e) => setNewContract({ ...newContract, room: e.target.value })} />
            <input name="tenant" placeholder="Tên người thuê" className="border p-2" value={newContract.tenant} onChange={(e) => setNewContract({ ...newContract, tenant: e.target.value })} />
            <input name="startDate" type="date" className="border p-2" value={newContract.startDate} onChange={(e) => setNewContract({ ...newContract, startDate: e.target.value })} />
            <input name="endDate" type="date" className="border p-2" value={newContract.endDate} onChange={(e) => setNewContract({ ...newContract, endDate: e.target.value })} />
            <input name="rent" type="number" placeholder="Giá thuê" className="border p-2" value={newContract.rent} onChange={(e) => setNewContract({ ...newContract, rent: e.target.value })} />
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded" onClick={handleAddOrUpdateContract}>{editingContract ? 'Cập nhật' : 'Thêm mới'}</button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Danh sách hợp đồng</h3>
          <table className="w-full border rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 text-left">Số phòng</th>
                <th className="p-2 text-left">Tên người thuê</th>
                <th className="p-2 text-left">Ngày bắt đầu</th>
                <th className="p-2 text-left">Ngày kết thúc</th>
                <th className="p-2 text-left">Giá thuê</th>
                <th className="p-2 text-left">Trạng thái</th>
                <th className="p-2 text-left">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((contract) => (
                <tr key={contract.id} className="border-b hover:bg-gray-100">
                  <td className="p-2">{contract.room}</td>
                  <td className="p-2">{contract.tenant}</td>
                  <td className="p-2">{contract.startDate}</td>
                  <td className="p-2">{contract.endDate}</td>
                  <td className="p-2">{contract.rent.toLocaleString()} đ</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 text-white text-sm rounded ${contract.status === "Đang thuê" ? "bg-green-500" : "bg-red-500"}`}>{contract.status}</span>
                  </td>
                  <td className="p-2 space-x-2">
                    {contract.status === "Đang thuê" && (
                      <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => {
                        setContractToCancel(contract);
                        setShowConfirm("cancel");
                      }}>
                        Huỷ
                      </button>
                    )}
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded" onClick={() => handleEdit(contract)}>Sửa</button>
                    <button className="bg-gray-600 text-white px-3 py-1 rounded" onClick={() => {
                      setDeleteTarget(contract);
                      setShowConfirm("delete");
                    }}>Xoá</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ConfirmDialog
        show={showConfirm === "cancel"}
        title="Xác nhận huỷ hợp đồng"
        message="Bạn có chắc chắn muốn huỷ hợp đồng này?"
        onConfirm={handleCancelContract}
        onCancel={() => setShowConfirm(false)}
      />

      <ConfirmDialog
        show={showConfirm === "delete"}
        title="Xác nhận xoá hợp đồng"
        message="Hành động này không thể hoàn tác. Bạn có chắc chắn muốn xoá?"
        onConfirm={handleDeleteContract}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
}
