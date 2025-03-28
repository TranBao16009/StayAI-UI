import { useState } from "react";
import SideBar from "../Components/SideBar/SideBar";

export default function TenantManage() {
  const [contracts, setContracts] = useState([
    { id: 1, room: "101", tenantName: "Nguyễn Văn A", tenantPhone: "0987654321", startDate: "2024-01-01", endDate: "2025-01-01", rent: "3.000.000", status: "Đang hiệu lực" },
    { id: 2, room: "102", tenantName: "Trần Thị B", tenantPhone: "0934567890", startDate: "2023-06-01", endDate: "2024-06-01", rent: "3.500.000", status: "Sắp hết hạn" },
  ]);
  const [search, setSearch] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newContract, setNewContract] = useState({
    room: "",
    tenantName: "",
    tenantPhone: "",
    startDate: "",
    endDate: "",
    rent: "",
    status: "Đang hiệu lực",
  });
  const [editingContract, setEditingContract] = useState(null);

  const filteredContracts = contracts.filter((contract) =>
    contract.tenantName.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddContract = () => {
    const newContractData = {
      id: contracts.length + 1,
      ...newContract,
    };
    setContracts([...contracts, newContractData]);
    setShowAddForm(false);
    setNewContract({ room: "", tenantName: "", tenantPhone: "", startDate: "", endDate: "", rent: "", status: "Đang hiệu lực" });
  };

  const handleDeleteContract = (id) => {
    const updatedContracts = contracts.filter((contract) => contract.id !== id);
    setContracts(updatedContracts);
  };

  const handleSaveContract = (updatedContract) => {
    const updatedContracts = contracts.map((contract) =>
      contract.id === updatedContract.id ? updatedContract : contract
    );
    setContracts(updatedContracts);
    setEditingContract(null);
  };

  return (
    <>
      <SideBar />
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">Quản lý hợp đồng và khách thuê</h2>
        <hr className="mb-6 border-gray-300" />

        {/* Thanh tìm kiếm */}
        <div className="relative max-w-md mb-6">
          <input
            type="text"
            placeholder="Tìm theo tên khách hàng..."
            className="border p-3 pl-10 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Bảng hợp đồng */}
        <table className="w-full border rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left">Số phòng</th>
              <th className="p-2 text-left">Tên khách hàng</th>
              <th className="p-2 text-left">Số điện thoại</th>
              <th className="p-2 text-left">Ngày bắt đầu</th>
              <th className="p-2 text-left">Ngày kết thúc</th>
              <th className="p-2 text-left">Giá thuê</th>
              <th className="p-2 text-left">Trạng thái</th>
              <th className="p-2 text-left">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filteredContracts.map((contract) => (
              <tr key={contract.id} className="border-b hover:bg-gray-100">
                <td className="p-2">{contract.room}</td>
                <td className="p-2">{contract.tenantName}</td>
                <td className="p-2">{contract.tenantPhone}</td>
                <td className="p-2">{contract.startDate}</td>
                <td className="p-2">{contract.endDate}</td>
                <td className="p-2">{contract.rent}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 text-white text-sm rounded ${contract.status === "Đang hiệu lực" ? "bg-green-500" : "bg-yellow-500"
                      }`}
                  >
                    {contract.status}
                  </span>
                </td>
                <td className="p-2 flex gap-2">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    onClick={() => setEditingContract(contract)}
                  >
                    Sửa
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDeleteContract(contract.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setShowAddForm(true)}
          >
            Thêm Hợp Đồng
          </button>
        </div>

        {/* Form thêm hợp đồng */}
        {showAddForm && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
              <h3 className="text-xl font-bold mb-4">Thêm Hợp Đồng</h3>
              <input
                type="text"
                placeholder="Số phòng"
                className="border p-2 rounded w-full mb-2"
                value={newContract.room}
                onChange={(e) => setNewContract({ ...newContract, room: e.target.value })}
              />
              <input
                type="text"
                placeholder="Tên khách hàng"
                className="border p-2 rounded w-full mb-2"
                value={newContract.tenantName}
                onChange={(e) => setNewContract({ ...newContract, tenantName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Số điện thoại"
                className="border p-2 rounded w-full mb-2"
                value={newContract.tenantPhone}
                onChange={(e) => setNewContract({ ...newContract, tenantPhone: e.target.value })}
              />
              <input
                type="text"
                placeholder="Giá thuê"
                className="border p-2 rounded w-full mb-2"
                value={newContract.rent}
                onChange={(e) => setNewContract({ ...newContract, rent: e.target.value })}
              />
              <input
                type="date"
                className="border p-2 rounded w-full mb-2"
                value={newContract.startDate}
                onChange={(e) => setNewContract({ ...newContract, startDate: e.target.value })}
              />
              <input
                type="date"
                className="border p-2 rounded w-full mb-2"
                value={newContract.endDate}
                onChange={(e) => setNewContract({ ...newContract, endDate: e.target.value })}
              />
              <button
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleAddContract}
              >
                Lưu
              </button>
              <button
                className="mt-4 ml-2 bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setShowAddForm(false)}
              >
                Hủy
              </button>
            </div>
          </div>
        )}

        {/* Form chỉnh sửa hợp đồng */}
        {editingContract && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
              <h3 className="text-xl font-bold mb-4">Chỉnh sửa Hợp Đồng</h3>
              <input
                type="text"
                placeholder="Số phòng"
                className="border p-2 rounded w-full mb-2"
                value={editingContract.room}
                onChange={(e) =>
                  setEditingContract({ ...editingContract, room: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Tên khách hàng"
                className="border p-2 rounded w-full mb-2"
                value={editingContract.tenantName}
                onChange={(e) =>
                  setEditingContract({ ...editingContract, tenantName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Số điện thoại"
                className="border p-2 rounded w-full mb-2"
                value={editingContract.tenantPhone}
                onChange={(e) =>
                  setEditingContract({ ...editingContract, tenantPhone: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Giá thuê"
                className="border p-2 rounded w-full mb-2"
                value={editingContract.rent}
                onChange={(e) =>
                  setEditingContract({ ...editingContract, rent: e.target.value })
                }
              />
              <input
                type="date"
                className="border p-2 rounded w-full mb-2"
                value={editingContract.startDate}
                onChange={(e) =>
                  setEditingContract({ ...editingContract, startDate: e.target.value })
                }
              />
              <input
                type="date"
                className="border p-2 rounded w-full mb-2"
                value={editingContract.endDate}
                onChange={(e) =>
                  setEditingContract({ ...editingContract, endDate: e.target.value })
                }
              />
              <button
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => handleSaveContract(editingContract)}
              >
                Lưu
              </button>
              <button
                className="mt-4 ml-2 bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setEditingContract(null)}
              >
                Hủy
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}