import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import SideBars from "../Components/SideBars/SideBars";
const Profile = () => {
  const { user } = useContext(ShopContext);
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState(user ? user.username : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [phone, setPhone] = useState(user ? user.phone : "");

  const handleSave = () => {

    setEditMode(false);

  };

  return (
    <>
        <SideBars/>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Thông tin cá nhân</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Tên người dùng</label>
          {editMode ? (
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          ) : (
            <p className="p-2 border border-gray-300 rounded-lg">{username}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          {editMode ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          ) : (
            <p className="p-2 border border-gray-300 rounded-lg">{email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Số điện thoại</label>
          {editMode ? (
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          ) : (
            <p className="p-2 border border-gray-300 rounded-lg">{phone}</p>
          )}
        </div>
        {editMode ? (
          <button
            onClick={handleSave}
            className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
          >
            Lưu
          </button>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
          >
            Chỉnh sửa
          </button>
        )}
      </div>
    </div>
    </>
  );
};

export default Profile;