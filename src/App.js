import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Logo from "./components/headerLogo";
import Footer from "./components/footer";
import Menu from "./components/menu";
import ContactUs from "./pages/Contact_Us";
import AboutUs from "./pages/About_Us";
import TarifPage from "./pages/Tarifs";
import { LoginForm } from "./pages/login";
import { useToast } from "./context/toastsContext";

import "./app.scss";
import { Toast } from "./components/tosat";
import { useAuth } from "./context/userContext";
import { useEffect } from "react";
function App() {
  const {
    showToast,
    setShowToast,
    toastStatus,
    toastMessage,
    handleClose,
  } = useToast();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      {isLoggedIn ? (
        // Content to display when the user is logged in
        <>
          <Menu />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/tarifs" element={<TarifPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </>
      ) : (
        // Content to display when the user is not logged in
        <LoginForm />
      )}
      {showToast && (
        <Toast
          status={toastStatus}
          message={toastMessage}
          onClose={handleClose}
          showToast={showToast}
          setShowToast={setShowToast}
        />
      )}
    </>
  );
}

export default App;
