import axiosInstance from "./axiosInstance";
import API from "../_api_list";

export const getAllBlogs = async () => {
  const res = await axiosInstance.get(API.BLOG.GET_ALL);
  return res.data;
};

export const getBlogById = async (id) => {
  const res = await axiosInstance.get(API.BLOG.GET_BY_ID(id));
  return res.data;
};

export const createBlog = async (formData) => {
  const res = await axiosInstance.post(API.BLOG.CREATE, formData);
  return res.data;
};

export const updateBlog = async (id, formData) => {
  const res = await axiosInstance.put(API.BLOG.UPDATE(id), formData);
  return res.data;
};

export const deleteBlog = async (id) => {
  const res = await axiosInstance.delete(API.BLOG.DELETE(id));
  return res.data;
};
