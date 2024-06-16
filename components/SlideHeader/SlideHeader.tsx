import CloseButton from "../CloseButton"

const SlideHeader = ({ onClose = () => {}, title = "" }) => (
  <div
    className="px-4 py-3 bg-black_3
                        w-full flex justify-between"
  >
    <p>{title}</p>
    <CloseButton onClose={onClose} />
  </div>
)

export default SlideHeader
