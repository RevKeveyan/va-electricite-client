
import { createContext, useContext, useEffect, useState } from "react";

const ToastContext = createContext();

const useToast = () => {
  return useContext(ToastContext);
};


const ToastProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastStatus, setToastStatus] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const handleClose = () => {
    setShowToast(false);
  };
  

  const handleToast = (status,message) => {
    setToastStatus(status);
    setToastMessage(message);
    setShowToast(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
    };
  }, [showToast]);


  return (
    <ToastContext.Provider
      value={{ showToast, setShowToast, toastStatus, setToastStatus, toastMessage, setToastMessage, handleClose, handleToast }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export { ToastProvider, useToast };
