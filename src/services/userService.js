import axiosInstance from "./axiosInstance";
import API from "../_api_list";

// Get current logged-in user's profile
export const getMe = async () => {
  const res = await axiosInstance.get(API.USER.PROFILE);
  return res.data;
};
