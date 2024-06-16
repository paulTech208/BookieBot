import SlideHeader from "@/components/SlideHeader"
import { MENU_SCREEN, useMenu } from "@/providers/MenuProvider"
import EnterAmount from "./EnterAmount"
import Liquidity from "./Liquidity"
import Footer from "./Footer"

const Bookie = () => {
  const { setCurrentScreen } = useMenu()

  return (
    <div className="w-full h-full">
      <SlideHeader title="Become The Bookie" onClose={() => setCurrentScreen(MENU_SCREEN.CLOSED)} />
      <div className="px-2 py-4 !h-[calc(100%-93px)] overflow-y-auto">
        <EnterAmount />
        <Liquidity />
      </div>
      <Footer />
    </div>
  )
}

export default Bookie
