const FormError = ({ message }) => {
    if (!message) return null;
    return (
        <div className="bg-red-100 text-red-700 p-2 mb-4 rounded text-sm">{message}</div>
    )
}

export default FormError;