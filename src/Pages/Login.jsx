import React from "react";

const Login = () => {
  return (
    
    <div className="flex items-center justify-center min-h-screen bg-[#007370]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 mt-[-300px] ">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
        Đăng nhập
        </h2>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none text-gray-600"
          />
          <input
            type="Mật khẩu"
            placeholder="Mật khẩu"
            className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none text-gray-600"
          />
        </div>

       
        <button className="w-full bg-[#007370] text-white py-3 rounded-lg mt-4 hover:bg-red-600 transition">
          Đăng nhập
        </button>

     
        <p className="text-gray-600 text-center mt-4 cursor-pointer hover:underline ">
          Bạn đã có tài khoản chưa?{" "}
         
        </p>

      </div>
    </div>
  );
};

export default Login;
