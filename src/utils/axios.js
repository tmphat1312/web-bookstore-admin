import axios from "axios";

const axiosClient = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_BACKEND_URL,
  transformResponse: [
    (raw) => {
      const parsed = JSON.parse(raw);
      const { data, error } = parsed;

      if (error) {
        return { error };
      }

      if (data) {
        return data;
      }

      return parsed;
    },
  ],
});

export default axiosClient;
