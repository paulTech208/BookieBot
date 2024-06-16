const PlusButton = ({ onClick = () => {} }) => (
  <button
    type="button"
    onClick={onClick}
    className="rounded-sm border-[2px] border-green bg-black text-white
        w-[25px] h-[25px] flex justify-center items-center font-blinker"
  >
    +
  </button>
)

export default PlusButton
