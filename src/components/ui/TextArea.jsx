const TextArea = ({ label, name, value, onChange, rows = 6, required = true }) => {
    return (
        <div>
        {
            label && 
            <label htmlFor={name} className="block mb-1 font-medium">{label}</label>
        }
            <textarea name={name} id={name} rows={rows} value={value} onChange={onChange} required={required} className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
    )
}

export default TextArea;