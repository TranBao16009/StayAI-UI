import React, { useState } from 'react';
import SideBar from "../Components/SideBar/SideBar";

const ManageRoom = () => {
  const [rooms, setRooms] = useState([
    { id: 1, roomNumber: "101", status: "Còn trống", price: 2000000 },
    { id: 2, roomNumber: "102", status: "Đã có người thuê", price: 2500000 },
  ]);

  const [newRoom, setNewRoom] = useState({ roomNumber: "", status: "Còn trống", price: "" });
  const [editingRoom, setEditingRoom] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoom({ ...newRoom, [name]: value });
  };

  const handleAddRoom = () => {
    setRooms([...rooms, { ...newRoom, id: rooms.length + 1, price: parseInt(newRoom.price) }]);
    setNewRoom({ roomNumber: "", status: "Còn trống", price: "" });
  };

  const handleEditRoom = (room) => {
    setEditingRoom(room);
    setNewRoom(room);
  };

  const handleUpdateRoom = () => {
    setRooms(rooms.map(r => r.id === editingRoom.id ? newRoom : r));
    setEditingRoom(null);
    setNewRoom({ roomNumber: "", status: "Còn trống", price: "" });
  };

  const handleDeleteRoom = (id) => {
    setRooms(rooms.filter(room => room.id !== id));
  };

  return (
    <>
      <SideBar />
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-semibold mb-4">Quản lý phòng trọ</h1>

        {/* Table to display rooms */}
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Số phòng</th>
              <th className="p-3 text-left">Trạng thái</th>
              <th className="p-3 text-left">Giá thuê</th>
              <th className="p-3 text-left">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room.id} className="border-t">
                <td className="p-3">{room.roomNumber}</td>
                <td className={`p-3 ${room.status === "Còn trống" ? "text-green-500" : "text-red-500"}`}>{room.status}</td>
                <td className="p-3">{room.price.toLocaleString()} VND</td>
                <td className="p-3">
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded mr-2" onClick={() => handleEditRoom(room)}>Sửa</button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDeleteRoom(room.id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Form to add/edit room */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">{editingRoom ? "Cập nhật phòng" : "Thêm phòng mới"}</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="roomNumber"
              value={newRoom.roomNumber}
              onChange={handleInputChange}
              placeholder="Số phòng"
              className="border rounded px-2 py-1 w-full"
            />
            <select
              name="status"
              value={newRoom.status}
              onChange={handleInputChange}
              className="border rounded px-2 py-1 w-full"
            >
              <option value="Còn trống">Còn trống</option>
              <option value="Đã có người thuê">Đã có người thuê</option>
            </select>
            <input
              type="number"
              name="price"
              value={newRoom.price}
              onChange={handleInputChange}
              placeholder="Giá thuê"
              className="border rounded px-2 py-1 w-full"
            />
            {editingRoom ? (
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleUpdateRoom}>Cập nhật phòng</button>
            ) : (
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddRoom}>Thêm phòng</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageRoom;