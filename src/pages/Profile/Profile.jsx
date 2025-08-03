import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import { getMe } from "../../services/userService";
import { getAllBlogs } from "../../services/blogService";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [userBlogs, setUserBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    console.log(userBlogs);

    useEffect(() => {
        const fetchProfileAndBlogs = async () => {
            try {
                const [userData, blogsData] = await Promise.all([
                    getMe(),
                    getAllBlogs(),
                ]);

                setUser(userData);
                const filtered = blogsData.filter(
                (blog) => blog.author._id === userData._id
                );
                setUserBlogs(filtered);
            } catch (err) {
                setError(err.message || "Failed to load profile");
            } finally {
                setLoading(false);
            }
        };

        fetchProfileAndBlogs();
    }, []);

    const handleDelete = (deletedId) => {
        setUserBlogs((prev) => prev.filter((b) => b._id !== deletedId));
    };

    if (loading) return <p>Loading Profile ...</p>;
    if (error) return <p className="text-red-500">{error}</p>

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>

            <div className="mb-6 text-gray-800">
                <p><strong>Name:</strong> {user?.name}</p>
                <p><strong>Email:</strong> {user?.email}</p>
            </div>

            <hr className="mb-6" />

            <h3 className="text-xl font-semibold mb-4">My Blogs</h3>

            {
                userBlogs.length > 0 ? 
                <div className="grid grid-cols-1 gap-4">
                {
                    userBlogs.map((blog) => (
                        <BlogCard key={blog?._id} blog={blog} onDelete={handleDelete} />
                    ))
                }
                </div>
                :
                <p className="text-gray-500">You haven't written any blog yet.</p>
            }
        </div>
    )
}

export default Profile; 