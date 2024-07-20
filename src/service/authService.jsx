import { useNavigate } from "react-router";
import { api } from "../helpers";
import { useHttp } from "../hook/http.hook";
import { useAuth } from "../context/userContext";
import { useToast } from "../context/toastsContext";

const useAuthService = () => {
  const {
    loadingStatus,
    request,
    error,
    clearError,
    setProcess,
  } = useHttp();


  const { setIsLoggedIn, setUser } = useAuth();
  const { handleToast } = useToast();



  const authRoute = `${api}/auth`;

  const login = async (data) => {
    try {
      const res = await request(
        `${authRoute}/login`,
        "POST",
        JSON.stringify(data)
      );
      setUser(res.user);
      setIsLoggedIn(true);
      handleToast("success", "Welcome Back");
      localStorage.setItem("token", res.token);
    } catch (e) {
      handleToast("error", e.message);
    }
  };

  const logout = async () => {
    try {
      const res = await request(
        `${authRoute}/logout`,
        "POST",
      );
      setIsLoggedIn(false);
      localStorage.clear();
    } catch (e) {
      handleToast("error", e.message);
    }
  };

  return {
    loadingStatus,
    error,
    login,
    logout,
    setProcess,
    clearError,
  };
};

export default useAuthService;
