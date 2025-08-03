import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlogById } from "../../services/blogService";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogById(id);
        setBlog(data);
      } catch (err) {
        setError("Blog not found");
      }
    };

    fetchBlog();
  }, [id]);

  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!blog) return <p className="text-center">Loading blog...</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <div className="text-sm text-gray-500 mb-4 space-x-2">
            <Link to="/dashboard" className="hover:underline text-blue-500">Dashboard</Link>
            <span>/</span>
            <Link to="/profile" className="hover:underline text-blue-500">My Blogs</Link>
            <span>/</span>
            <span className="text-gray-700">{blog.title}</span>
        </div>

        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-500 text-sm mb-2">By {blog.author?.name}</p>
        <p className="text-gray-700 whitespace-pre-line">{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
