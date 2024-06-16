import SlideHeader from "@/components/SlideHeader"
import { MENU_SCREEN, useMenu } from "@/providers/MenuProvider"
import Input from "./Input"
import Odds from "./Odds"
import Times from "./Times"

const Settings = () => {
  const { setCurrentScreen } = useMenu()

  return (
    <div className="w-full h-full">
      <SlideHeader title="Bet Settings" onClose={() => setCurrentScreen(MENU_SCREEN.CLOSED)} />
      <div className="py-3 px-4">
        <div className="px-4 py-4 flex flex-col w-full gap-4 bg-black_1 rounded-md">
          <p>Default bet amounts</p>
          <div className="grid grid-cols-3 gap-3">
            <Input value={10} />
            <Input value={100} />
            <Input value={1000} />
          </div>
          <Odds />
          <Times />
        </div>
      </div>
    </div>
  )
}

export default Settings
