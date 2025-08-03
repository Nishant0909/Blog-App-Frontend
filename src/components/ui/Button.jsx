const Button = ({ children, type = "button", className = "", ...props }) => {
    return (
        <button type={type} className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition cursor-pointer ${className}`}>
            {children}
        </button>
    )
}

export default Button;