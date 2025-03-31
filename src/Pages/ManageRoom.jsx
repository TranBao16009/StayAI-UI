import React, { useEffect, useState } from 'react';
import SideBar from "../Components/SideBar/SideBar";
import ConfirmDialog from "../Components/Dialog/Dialog";

const ManageRoom = () => {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({ roomNumber: "", status: "Còn trống", price: "" });
  const [editingRoom, setEditingRoom] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [roomToDelete, setRoomToDelete] = useState(null);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const res = await fetch('/api/rooms');
      const data = await res.json();
      setRooms(data);
    } catch (err) {
      console.error("Lỗi tải danh sách phòng:", err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoom({ ...newRoom, [name]: value });
  };

  const handleAddRoom = async () => {
    try {
      const res = await fetch('/api/rooms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newRoom.roomNumber,
          price: parseInt(newRoom.price),
          status: newRoom.status
        })
      });
      const created = await res.json();
      setRooms([...rooms, created]);
      setNewRoom({ roomNumber: "", status: "Còn trống", price: "" });
    } catch (err) {
      console.error("Lỗi thêm phòng:", err);
    }
  };

  const handleEditRoom = (room) => {
    setEditingRoom(room);
    setNewRoom({
      roomNumber: room.name,
      status: room.status,
      price: room.price
    });
  };

  const handleUpdateRoom = async () => {
    try {
      const res = await fetch(`/api/rooms/${editingRoom.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newRoom.roomNumber,
          status: newRoom.status,
          price: parseInt(newRoom.price)
        })
      });
      const updated = await res.json();
      setRooms(rooms.map(r => r.id === editingRoom.id ? updated : r));
      setEditingRoom(null);
      setNewRoom({ roomNumber: "", status: "Còn trống", price: "" });
    } catch (err) {
      console.error("Lỗi cập nhật phòng:", err);
    }
  };

  const confirmDeleteRoom = (room) => {
    setRoomToDelete(room);
    setShowDialog(true);
  };

  const handleDeleteRoom = async () => {
    try {
      await fetch(`/api/rooms/${roomToDelete.id}`, { method: 'DELETE' });
      setRooms(rooms.filter(room => room.id !== roomToDelete.id));
      setShowDialog(false);
      setRoomToDelete(null);
    } catch (err) {
      console.error("Lỗi xoá phòng:", err);
    }
  };

  return (
    <>
      <SideBar />
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-semibold mb-4">Quản lý phòng trọ</h1>

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
                <td className="p-3">{room.name}</td>
                <td className={`p-3 ${room.status === "Còn trống" ? "text-green-500" : "text-red-500"}`}>{room.status}</td>
                <td className="p-3">{room.price.toLocaleString()} VND</td>
                <td className="p-3">
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded mr-2" onClick={() => handleEditRoom(room)}>Sửa</button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => confirmDeleteRoom(room)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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

      <ConfirmDialog
        show={showDialog}
        title="Xác nhận xoá phòng"
        message={`Bạn có chắc muốn xoá phòng ${roomToDelete?.name}?`}
        onConfirm={handleDeleteRoom}
        onCancel={() => setShowDialog(false)}
      />
    </>
  );
};

export default ManageRoom;
