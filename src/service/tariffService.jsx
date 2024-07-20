import { api, appendDataToFormData } from "../helpers";
import { useHttp } from "../hook/http.hook";
import { useToast } from "../context/toastsContext";

const useTariffService = () => {
  const { loadingStatus, request, error, clearError, setProcess, token } = useHttp();

  const { handleToast } = useToast();

  const tariffRoute = `${api}/tariffs`;

  const getTariffs = async (setTariffs,page = 1, limit = 10, type = "tariff") => {
    try {
      const res = await request(`${tariffRoute}/?page=${page}&limit=${limit}&type=${type}`, "GET");
      setTariffs(res)
    } catch (e) {
      handleToast("error", e.message);
    }
  };

  const addTariff = async (data) => {
    const formData = appendDataToFormData(data);
    try {
      const res = await request(`${tariffRoute}/`, "POST",  
      formData,
      {
        Authorization: token,
      }
      );

      handleToast("success", res.message);
    } catch (e) {
      handleToast("error", e.message);
    }
  };

  const editTariff = async (data, id) => {
    const formData = appendDataToFormData(data);
    try {
      const res = await request(`${tariffRoute}/${id}`, "PATCH",
      formData,
      {
        Authorization: token,
      }
      );
      handleToast("success", res.message);
    } catch (e) {
      handleToast("error", e.message);
    }
  };

  const deleteTariff = async (id) => {
    try {
      const res = await request(`${tariffRoute}/${id}`, "DELETE",);
      handleToast("success", res.message);
    } catch (e) {
      handleToast("error", e.message);
    }
  };



  return {
    loadingStatus,
    error,
    addTariff,
    getTariffs,
    editTariff,
    deleteTariff,
    setProcess,
    clearError,
  };
};

export default useTariffService;
