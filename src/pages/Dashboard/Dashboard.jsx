import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../../services/blogService";
import BlogCard from "../../components/BlogCard";

const Dashboard = () => {
  const { userName } = useSelector((state) => state.auth);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getAllBlogs();
        setBlogs(data);
      } catch (err) {
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = (deletedId) => {
    setBlogs((prev) => prev.filter((blog) => blog._id !== deletedId));
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {userName || "User"}</h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mb-8">
        <Link to='/create-blog' className="bg-blue-500 hover:bg-blue-600 text-white rounded p-4 shadow text-center">
          Create New Blog
        </Link>
        <Link to='/profile' className="bg-green-500 hover:bg-green-600 text-white rounded p-4 shadow text-center">
          View Profile
        </Link>
      </div>

      <h2 className="text-xl font-semibold mb-4">All Blogs</h2>

      {loading ? (
        <p className="text-gray-500">Loading blogs...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No blogs found.</p>
      )}
    </div>
  );
};

export default Dashboard;
