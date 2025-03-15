import { useState } from "react";
import SideBar from "../Components/SideBar/SideBar";
const tenants = [
  { id: 1, name: "Nguyễn Văn A", phone: "0987654321", room: "101", status: "Đang thuê" },
  { id: 2, name: "Trần Thị B", phone: "0934567890", room: "102", status: "Sắp hết hạn" },
  { id: 3, name: "Nguyễn Văn A", phone: "0987654321", room: "103", status: "Đang thuê" },
  { id: 4, name: "Trần Thị B", phone: "0934567890", room: "104", status: "Sắp hết hạn" },
  { id: 5, name: "Nguyễn Văn A", phone: "0987654321", room: "105", status: "Đang thuê" },
  { id: 6, name: "Trần Thị B", phone: "0934567890", room: "106", status: "Sắp hết hạn" }
];

export default function TenantManage() {
  const [selectedTenant, setSelectedTenant] = useState(null);
  const [search, setSearch] = useState("");

  const filteredTenants = tenants.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
        <SideBar/>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Quản lý khách thuê</h2>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Tìm theo tên khách hàng..."
          className="border p-2 rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <table className="w-full border rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 text-left">Tên</th>
                <th className="p-2 text-left">Số điện thoại</th>
                <th className="p-2 text-left">Phòng</th>
                <th className="p-2 text-left">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {filteredTenants.map((tenant) => (
                <tr
                  key={tenant.id}
                  className="border-b hover:bg-gray-100 cursor-pointer"
                  onClick={() => setSelectedTenant(tenant)}
                >
                  <td className="p-2">{tenant.name}</td>
                  <td className="p-2">{tenant.phone}</td>
                  <td className="p-2">{tenant.room}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 text-white text-sm rounded ${
                        tenant.status === "Đang thuê" ? "bg-green-500" : "bg-yellow-500"
                      }`}
                    >
                      {tenant.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border p-4 rounded-lg bg-white shadow">
          {selectedTenant ? (
            <div>
              <h3 className="text-xl font-semibold mb-2">Chi tiết khách thuê</h3>
              <p><strong>Tên:</strong> {selectedTenant.name}</p>
              <p><strong>Số điện thoại:</strong> {selectedTenant.phone}</p>
              <p><strong>Phòng:</strong> {selectedTenant.room}</p>
              <p>
                <strong>Trạng thái:</strong>{" "}
                <span
                  className={`px-2 py-1 text-white text-sm rounded ${
                    selectedTenant.status === "Đang thuê" ? "bg-green-500" : "bg-yellow-500"
                  }`}
                >
                  {selectedTenant.status}
                </span>
              </p>
            </div>
          ) : (
            <p className="text-gray-500">Không có khách hàng nào được chọn</p>
          )}
        </div>
      </div>
    </div>
    </>
  );
}