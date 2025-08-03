import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { loginSuccess } from "../../features/authSlice";
import FormError from '../../components/ui/FormError';
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { showError, showSuccess } from "../../utils/alertHelper";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const data = await loginUser(formData);
            dispatch(loginSuccess(data));
            showSuccess("Welcome back!");
            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
            showError(err.message);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login to BlogHub</h2>
                <FormError message={error} />

                <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
                <Input label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />

                <Button type="submit">Login</Button>

                <p className="text-center text-sm mt-5">Don't have an account <Link to='/register' className="text-blue-500 hover:text-blue-600 transition font-bold">SignUp</Link> here.</p>
            </form>
        </div>
    )
}

export default Login;