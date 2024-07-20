
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


  const { handleToast } = useToast();



  const accountRoute = `${api}/account`;

  const update = async (id, data) => {
    try {
      const res = await request(
        `${accountRoute}/${id}`,
        "POST",
        JSON.stringify(data)
      );
      
      handleToast("success", res.message);
      localStorage.setItem("token", res.token);
    } catch (e) {
      handleToast("error", e.message);
    }
  };


  return {
    loadingStatus,
    error,
    update,
    setProcess,
    clearError,
  };
};

export default useAuthService;
