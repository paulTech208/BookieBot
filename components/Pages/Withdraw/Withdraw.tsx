import SlideHeader from "@/components/SlideHeader"
import { MENU_SCREEN, useMenu } from "@/providers/MenuProvider"
import EnterAmount from "./EnterAmount"
import Footer from "./Footer"
import EnterAddress from "./EnterAddress"

const Withdraw = () => {
  const { setCurrentScreen } = useMenu()

  return (
    <div className="w-full h-full">
      <SlideHeader title="Withdraw Funds" onClose={() => setCurrentScreen(MENU_SCREEN.CLOSED)} />
      <div
        className="px-2 py-4 !h-[calc(100%-93px)] overflow-y-auto
      flex flex-col w-full gap-4"
      >
        <EnterAmount />
        <EnterAddress />
      </div>
      <Footer />
    </div>
  )
}

export default Withdraw
