const MenuButton = ({ className = "", children, onClick = () => {} }) => (
  <button
    type="button"
    className={`bg-black_1 py-3 rounded-md 
            text-left px-4 focus:border focus:border-green ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)

export default MenuButton
