const Button = ({ className = "", children, selected = false, onClick = () => {} }) => (
  <button
    type="button"
    className={`w-full py-1 rounded-md text-white text-md
                ${selected ? "bg-green" : "bg-black_3"}
            ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
