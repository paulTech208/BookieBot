const Input = ({ selected = false, value, toggleInput = () => {} }) => (
  <button
    className={`w-full h-[37px] cursor-pointer
        flex items-center rounded-md font-blinker text-md
        px-3 py-1 ${selected ? "bg-green text-black" : "bg-black text-whie"}`}
    type="button"
    onClick={toggleInput}
  >
    {value}
  </button>
)

export default Input
