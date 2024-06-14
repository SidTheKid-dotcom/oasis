import axios from "axios";

export const baseURL = "http://3.110.161.150:4000/api";

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // localStorage.removeItem("token");

    return Promise.reject(error);
  }
);

export default api;
