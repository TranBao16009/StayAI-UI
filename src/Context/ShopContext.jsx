import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);
  


  const authorization = async (username, role) => {
    try {
      // const res = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ username, password })
      // });
  
      // const data = await res.json();
      // if (data.success) {
      //   const userInfo = { username: username, role: data.role || "user" };
      //   localStorage.setItem("user", JSON.stringify(userInfo));
      //   setUser(userInfo);
      //   setIsAuthenticated(true);
      //   navigate("/homes");s
      // } else {
      //   alert("Sai thông tin đăng nhập");
      // }
      const userInfo = { username: username, role: role || "user" };
      localStorage.setItem("user", JSON.stringify(userInfo));
      setUser(userInfo);
      setIsAuthenticated(true);
      if (role === "owner") {
        navigate("/homes");
      }
      else {
        navigate("/home");
      }
    } catch (err) {
      console.error("Lỗi đăng nhập:", err);
    }
  };
  
  

const logout = () => {
  setIsAuthenticated(false);
  localStorage.removeItem("user");
  setUser(null);
  navigate("/logins");
};



  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const contextValue = { cart, addToCart, isAuthenticated, authorization, logout, user, setUser };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
