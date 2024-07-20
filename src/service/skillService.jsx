import { api, appendDataToFormData } from "../helpers";
import { useHttp } from "../hook/http.hook";
import { useToast } from "../context/toastsContext";

const useSkillService = () => {
  const { loadingStatus, request, error, clearError, setProcess, token } = useHttp();

  const { handleToast } = useToast();

  const skillRoute = `${api}/skills`;

  const getSkills = async (setSkills, page = 1, limit = 10, type = "skill") => {
    try {
      const res = await request(`${skillRoute}/?page=${page}&limit=${limit}&type=${type}`, "GET");
      setSkills(res);
    } catch (e) {
      handleToast("error", e.message);
    }
  };

  const addSkill = async (data) => {
    const formData = appendDataToFormData(data);
    try {
      const res = await request(`${skillRoute}/`, "POST", formData,
      {
        Authorization: token,
      });

      handleToast("success", res.message);
    } catch (e) {
      handleToast("error", e.message);
    }
  };

  const editSkill = async (data, id) => {
    const formData = appendDataToFormData(data);
    try {
      const res = await request(`${skillRoute}/${id}`, "PATCH",  formData,
      {
        Authorization: token,
      });
      handleToast("success", res.message);
    } catch (e) {
      handleToast("error", e.message);
    }
  };

  const deleteSkill = async (id) => {
    try {
      const res = await request(`${skillRoute}/${id}`, "DELETE",);
      handleToast("success", res.message);
    } catch (e) {
      handleToast("error", e.message);
    }
  };



  return {
    loadingStatus,
    error,
    addSkill,
    getSkills,
    editSkill,
    deleteSkill,
    setProcess,
    clearError,
  };
};

export default useSkillService;
