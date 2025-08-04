import axios from "axios";
import { getCookie, setCookie } from "../utils/cookie";

const api =axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    headers:{
        "Content-Type":"application/json",
    },
});
api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const orginialRequest = error.config;
    if (error.response.status === 401 && !orginialRequest._retry) {
      orginialRequest._retry = true;

      const res = await getNewTokens();
      if (!res?.response)return 
        setCookie(res?.response.data);
        
        return api(orginialRequest);
      } 
    }
    
 
);
export default api

const getNewTokens = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return;
  try {
    const response = await api.post(
      "auth/check-refresh-token",
      {
        refreshToken,
      }
    );
    return { response };
  } catch (error) {
    return { error };
  }
};