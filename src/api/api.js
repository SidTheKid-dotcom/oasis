import axios from "axios";
import { useAuth } from "@/context/authContext";

export const baseURL = "http://3.110.161.150:4000/api";

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  (config) => {
    const token = useAuth();

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {

    return Promise.reject(error);
  }
);

export default api;
