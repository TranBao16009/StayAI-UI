import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // dùng để chuyển hướng trang

export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Hook điều hướng

  // Hàm đăng nhập (giả định)
  const login = (username, password) => {
    if (username === "admin" && password === "123") {
      setIsAuthenticated(true);
      navigate("/homes"); // Chuyển đến trang Home sau khi đăng nhập
      alert ("dung tai khoan va mat khau")
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };

  // Hàm đăng xuất
  const logout = () => {
    setIsAuthenticated(false);
    navigate("/login"); // Quay về trang Login
  };

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const contextValue = { cart, addToCart, isAuthenticated, login, logout };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
