import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
import { loginSuccess } from "../../features/authSlice";
import FormError from "../../components/ui/FormError";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { showError, showSuccess } from "../../utils/alertHelper";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const data = await registerUser(formData);
            dispatch(loginSuccess(data));
            showSuccess("Registration Successfully.");
            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
            showError(err.message);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>

                <FormError message={error} />

                <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
                <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
                <Input label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />

                <Button type="submit">Register</Button>

                <p className="text-center text-sm mt-5">Already have an account <Link to='/login' className="text-blue-500 hover:text-blue-600 transition font-bold">Login</Link> here.</p>
            </form>
        </div>
    )
}

export default Register;