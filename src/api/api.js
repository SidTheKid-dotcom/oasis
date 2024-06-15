// api.js
import axios from "axios";
import { useAuth } from "@/context/authContext";

export const baseURL = "http://3.110.161.150:4000/api";

const api = axios.create({
  baseURL,
});

// Custom Axios interceptor function
const setupAxiosInterceptors = (instance) => {
  instance.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

// Setup interceptors
setupAxiosInterceptors(api);

export default api;
