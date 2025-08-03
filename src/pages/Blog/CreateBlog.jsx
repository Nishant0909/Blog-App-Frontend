import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../../services/blogService";
import FormError from "../../components/ui/FormError";
import Input from "../../components/ui/Input";
import TextArea from "../../components/ui/TextArea";
import Button from "../../components/ui/Button";
import { showError, showSuccess } from "../../utils/alertHelper";

const CreateBlog = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ title: "", content: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await createBlog(formData);
            showSuccess("Blog published!");
            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
            showError(err.message);
        }
    }

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Create New Blog</h2>

            <form onSubmit={handleSubmit}>
                <FormError message={error} />

                <Input label="Title" name="title" value={formData.title} onChange={handleChange} />
                <TextArea label="Content" name="content" value={formData.content} onChange={handleChange} />

                <Button type="submit">Publish Blog</Button>
            </form>
        </div>
    )
}

export default CreateBlog;