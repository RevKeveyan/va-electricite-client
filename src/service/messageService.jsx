import { useNavigate } from "react-router";
import { api } from "../helpers";
import { useHttp } from "../hook/http.hook";
import { useAuth } from "../context/userContext";
import { useToast } from "../context/toastsContext";

const useMessageService = () => {
  const {
    loadingStatus,
    request,
    error,
    clearError,
    setProcess,
  } = useHttp();


  const { handleToast } = useToast();



  const messageRoute = `${api}/messages`;

  const sendMessage = async (data) => {
    try {
      const res = await request(
        `${messageRoute}/`,
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
    sendMessage,
    setProcess,
    clearError,
  };
};

export default useMessageService;
