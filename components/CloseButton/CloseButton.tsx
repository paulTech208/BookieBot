const CloseButton = ({ onClose = () => {} }) => (
  <button
    onClick={onClose}
    className="w-[25px] aspect-[1/1] rounded-md text-white
            flex justify-center items-center bg-black"
    type="button"
  >
    X
  </button>
)

export default CloseButton
