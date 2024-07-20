import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { api } from "../helpers";
const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};



const AuthProvider = ({ children }) => {
  const location = useLocation();
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  const getUser = async() =>{
    await axios
       .get(`${api}/auth/me`, {
         headers: { Authorization: localStorage.getItem("token") },
       })
       .then((res) => {
        console.log(res.data);
        setUser(res.data);
       })
       .catch((error) => {
         localStorage.clear();
         setIsLoggedIn(false);
       });
 }

useEffect(() => {
    getUser()
}, [location.pathname]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, getUser, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );

  
};

export { AuthProvider, useAuth };

