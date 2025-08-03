import axios from "axios";

// Set default headers for axios
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: { "Content-Type": "application/json" }
});

// Add request interceptor to inject token
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Add response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const message = error.response?.data?.message || error.message || "Something went wrong!";

        if (error.response?.status === 401) {
            console.warn("Unauthorized");
        }

        console.error("API Error: ", message);
        return Promise.reject(new Error(message));
    }    
);

export default axiosInstance;