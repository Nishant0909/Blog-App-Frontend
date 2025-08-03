import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById, updateBlog } from "../../services/blogService";

import Input from "../../components/ui/Input";
import TextArea from "../../components/ui/TextArea";
import Button from "../../components/ui/Button";
import FormError from "../../components/ui/FormError";
import { showError, showSuccess } from "../../utils/alertHelper";

const EditBlog = () => {
  const { id } = useParams(); // blog ID from route
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ title: "", content: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogById(id);
        setFormData({
          title: data.title,
          content: data.content,
        });
      } catch (err) {
        setError("Failed to load blog.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await updateBlog(id, formData);
      showSuccess("Blog published!");
      navigate("/profile");
    } catch (err) {
      setError(err.message || "Failed to update blog");
      showError(err.message || "Failed to update blog");
    }
  };

  if (loading) return <p className="text-center">Loading blog...</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">✏️ Edit Blog</h2>

      <form onSubmit={handleSubmit}>
        <FormError message={error} />

        <Input
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <TextArea
          label="Content"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />

        <Button type="submit">Update Blog</Button>
      </form>
    </div>
  );
};

export default EditBlog;
