import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from '../services/axiosInstance';
import API from '../_api_list';
import { showConfirm, showError, showSuccess } from "../utils/alertHelper";
import { formatDateTime } from "../utils/dateFormat";

const BlogCard = ({ blog, onDelete }) => {
    const { userId } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const isAuthor = userId === blog.author?._id;

    const handleDelete = async () => {
        const confirm = await showConfirm("Are you sure you want to delete this blog?");
        if (!confirm) return;

        try {
            await axiosInstance.delete(API.BLOG.DELETE(blog._id));
            showSuccess("Blog deleted successfully");

            if (onDelete) onDelete(blog._id);
        } catch (err) {
            console.error("Delete Failed: ", err.message);
            showError("Failed to delete blog");
        }
    }

    return (
        <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-700 text-sm mb-2 line-clamp-3">
                {blog.content}
                <Link to={`/blogs/${blog._id}`} className="text-blue-600 text-xs hover:underline ml-2">read more ...</Link>
            </p>

            <p className="text-xs text-gray-500 mb-1">By: {blog.author?.name || "Unknown"}</p>
            <p className="text-xs text-gray-500 mb-1">Created: {formatDateTime(blog.createdAt)}</p>
            <p className="text-xs text-gray-500 mb-1">Updated: {formatDateTime(blog.updatedAt)}</p>

            <div className="flex items-center justify-between">
                {
                isAuthor &&
                <div className="flex space-x-2">
                    <button onClick={() => navigate(`/edit-blog/${blog._id}`)} className="text-sm text-yellow-600 hover:underline cursor-pointer">
                        Edit
                    </button>
                    <button onClick={handleDelete} className="text-sm text-red-600 hover:underline cursor-pointer">
                        Delete
                    </button>
                </div>
                }
            </div>
        </div>
    )
}

export default BlogCard;