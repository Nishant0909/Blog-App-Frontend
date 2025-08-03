const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001/api";

const API = {
    AUTH: {
        REGISTER: `${BASE_URL}/auth/register`,
        LOGIN: `${BASE_URL}/auth/login`,
        LOGOUT: `${BASE_URL}/auth/logout`,
    },
    USER: {
        PROFILE: `${BASE_URL}/users/me`,
    },
    BLOG: {
        CREATE: `${BASE_URL}/blogs`,
        GET_ALL: `${BASE_URL}/blogs`,
        GET_BY_ID: (id) => `${BASE_URL}/blogs/${id}`,
        UPDATE: (id) => `${BASE_URL}/blogs/${id}`,
        DELETE: (id) => `${BASE_URL}/blogs/${id}`,
    },
};

export default API;