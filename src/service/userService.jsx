import { api, appendDataToFormData } from "../helpers";
import { useHttp } from "../hook/http.hook";
import { useToast } from "../context/toastsContext";

const useUserService = () => {
  const { loadingStatus, request, error, clearError, setProcess, token } =
    useHttp();

  const { handleToast } = useToast();

  const userRoute = `${api}/users`;

  const getUsers = async (setUsers, page = 1, limit = 10) => {
    try {
      const res = await request(
        `${userRoute}/?page=${page}&limit=${limit}`,
        "GET"
      );
      setUsers(res);
    } catch (e) {
      handleToast("error", e.message);
    }
  };

  const addUser = async (data) => {
    const formData = appendDataToFormData(data);
    try {
      const res = await request(`${userRoute}/`, "POST", formData, {
        Authorization: token,
      });
      handleToast("success", res.message);
    } catch (e) {
      handleToast("error", e.message);
    }
  };

  const editUser = async (data, id = "6540e840750a4c84f1025883") => {
    const formData = appendDataToFormData(data);
    try {
      const res = await request(`${userRoute}/${id}`, "PATCH", formData, {
        Authorization: token,
      });
      handleToast("success", res.message);
    } catch (e) {
      handleToast("error", e.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await request(`${userRoute}/${id}`, "DELETE");
      handleToast("success", res.message);
    } catch (e) {
      handleToast("error", e.message);
    }
  };

  return {
    loadingStatus,
    error,
    addUser,
    getUsers,
    editUser,
    deleteUser,
    setProcess,
    clearError,
  };
};

export default useUserService;
