import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); 

  useEffect(()=>{
    const savedUsers = localStorage.getItem("user");
    if(savedUsers){
      setUser(JSON.parse(savedUsers));
    }
  }, []);


  const login = (username, password) => {
    if (username === "admin" && password === "123") {
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify({
        "username": username
      }));
      setUser(localStorage.getItem("user"));
      navigate("/homes"); 
     
    } 
  };
  

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    setUser(null);
    console("Redirect to login");
    navigate("/logins"); 
  };


  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const contextValue = { cart, addToCart, isAuthenticated, login, logout, user, setUser };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
