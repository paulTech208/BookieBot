import SlideHeader from "@/components/SlideHeader"
import { MENU_SCREEN, useMenu } from "@/providers/MenuProvider"
import EnterAmount from "./EnterAmount"
import Footer from "./Footer"
import BaseCoin from "./BaseCoin"
import PairCoin from "./PairCoin"

const Bridge = () => {
  const { setCurrentScreen } = useMenu()

  return (
    <div className="w-full h-full">
      <SlideHeader title="Bridge" onClose={() => setCurrentScreen(MENU_SCREEN.CLOSED)} />
      <div className="px-2 py-4 !h-[calc(100%-93px)] overflow-y-auto">
        <div className="bg-black_3 p-3 rounded-md">
          <EnterAmount />
          <BaseCoin />
          <PairCoin />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Bridge
