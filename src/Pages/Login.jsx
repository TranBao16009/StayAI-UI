import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Giả sử kiểm tra thông tin đăng nhập
    if (email === "" || organization === "" || password === "") {
      setError("Vui lòng điền đầy đủ thông tin.");
    } else {
      // Xử lý đăng nhập
      setError("");
      // Điều hướng đến trang homes
      window.location.href = "/homes";
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#007370]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 mt-[-150px]">
        <div className="text-center mb-6">
          
          <h2 className="text-2xl font-bold text-gray-700 hover:bg-gray-600">Đăng nhập</h2>
          <p className="text-gray-600">Chào mừng trở lại! Vui lòng đăng nhập để tiếp tục.</p>
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none text-gray-600"
          />
          <input
            type="text"
            placeholder="Tên tổ chức"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none text-gray-600"
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none text-gray-600"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-[#007370] text-white py-3 rounded-lg mt-4 hover:bg-red-600 transition"
        >
          Đăng nhập
        </button>
        <div className="text-center mt-4">
          <p className="text-gray-600">Bạn chưa có tài khoản?</p>
          <Link to="/registers" className="text-[#007370] hover:underline">
            Đăng ký
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Login;