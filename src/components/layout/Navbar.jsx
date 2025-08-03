import { Link } from 'react-router-dom';
import LogoutButton from '../ui/LogoutButton';

const Navbar = ({ onToggleSidebar }) => {
    return (
        <nav className="w-full bg-white shadow px-4 py-3 flex justify-between items-center">
            <button onClick={onToggleSidebar} className="text-blue-600 font-bold px-3 py-1 border border-blue-600 rounded hover:bg-blue-100 cursor-pointer">
                ☰
            </button>

            <Link to='/' className="text-xl font-bold text-blue-600">
                BlogHub
            </Link>
            <LogoutButton />
        </nav>
    )
}

export default Navbar;