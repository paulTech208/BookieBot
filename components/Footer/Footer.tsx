import Icon from "@/shared/Icon"
import { useLayout } from "@/providers/LayoutProvider"
import data from "./data"

const Footer = () => {
  const { setCurrentLayout } = useLayout()

  return (
    <div className="flex w-full justify-between px-4 bg-black py-2">
      {data.map((item) => (
        <button
          type="button"
          className="flex flex-col items-center"
          key={item.label}
          onClick={() => setCurrentLayout(item.screen)}
        >
          <Icon name={item.icon as any} raw size={20} color="white" />
          <p className="text-white text-[10px]">{item.label}</p>
        </button>
      ))}
    </div>
  )
}

export default Footer
