import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ onClose }) => {
    const linkClasses = "block p-2 rounded hover:bg-blue-100";

    return (
        <aside className="w-64 bg-gray-100 h-screen p-4 transition-all duration-300">
            <nav className="flex flex-col space-y-2">
                <Link to='/' onClick={onClose} className="text-xl font-bold text-blue-600">
                    BlogHub
                </Link>
                <NavLink to='/dashboard' onClick={onClose} className={linkClasses}>Dashboard</NavLink>
                <NavLink to='/create-blog' onClick={onClose} className={linkClasses}>Create Blog</NavLink>
                <NavLink to='/profile' onClick={onClose} className={linkClasses}>Profile</NavLink>
            </nav>
        </aside>
    )
}

export default Sidebar;