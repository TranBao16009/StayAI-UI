import React from "react";
const TenantManage = () => {
    const tenants = [
      { id: 1, name: "Nguyễn Văn A", phone: "0987654321", room: "101", status: "Đang thuê" },
      { id: 2, name: "Trần Thị B", phone: "0934567890", room: "102", status: "Sắp hết hạn" },
      { id: 3, name: "Nguyễn Văn A", phone: "0987654321", room: "103", status: "Đang thuê" },
      { id: 4, name: "Trần Thị B", phone: "0934567890", room: "104", status: "Sắp hết hạn" },
      { id: 5, name: "Nguyễn Văn A", phone: "0987654321", room: "105", status: "Đang thuê" },
      { id: 6, name: "Trần Thị B", phone: "0934567890", room: "106", status: "Sắp hết hạn" },
    ];
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Quản lý khách thuê</h1>
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Tên</th>
              <th className="p-3 text-left">Số điện thoại</th>
              <th className="p-3 text-left">Phòng</th>
              <th className="p-3 text-left">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((tenant) => (
              <tr key={tenant.id} className="border-t">
                <td className="p-3">{tenant.name}</td>
                <td className="p-3">{tenant.phone}</td>
                <td className="p-3">{tenant.room}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-white ${tenant.status === "Đang thuê" ? "bg-green-500" : "bg-yellow-500"}`}>
                    {tenant.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TenantManage;
  