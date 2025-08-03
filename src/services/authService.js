import axiosInstance from "./axiosInstance";
import API from "../_api_list";

// Register User
export const registerUser = async (formData) => {
    const res = await axiosInstance.post(API.AUTH.REGISTER, formData);
    return res.data;
};

// Login User
export const loginUser = async (formData) => {
    const res = await axiosInstance.post(API.AUTH.LOGIN, formData);
    return res.data;
}

// Logout User
export const logoutUser = async () => {
  const res = await axiosInstance.post(API.AUTH.LOGOUT);
  return res.data;
};