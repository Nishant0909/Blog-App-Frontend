const Input = ({ label, name, type = "text", value, onChange, required = true }) => {
    return (
        <div className="mb-4">
            {label &&
                <label htmlFor={name} className="block mb-1 font-medium">{label}</label>
            }
            <input type={type} name={name} id={name} value={value} onChange={onChange} required={required} className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
    )
}

export default Input;