import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/authSlice";
import { showError, showSuccess } from "../../utils/alertHelper";
import { logoutUser } from "../../services/authService";

const LogoutButton = ({ className = "" }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logoutUser();
            dispatch(logout());
            showSuccess("Logged out successfully");
            navigate("/login");
        } catch (err) {
            showError("Logout failed");
        }
    };

    return (
        <button onClick={handleLogout} className={`bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition cursor-pointer ${className}`}>Logout</button>
    )
}

export default LogoutButton;