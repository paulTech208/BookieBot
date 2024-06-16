import SlideLayout from "@/components/Layout/SlideLayout"
import SlideHeader from "@/components/SlideHeader"
import { LAYOUT, useLayout } from "@/providers/LayoutProvider"
import { MENU_SCREEN, useMenu } from "@/providers/MenuProvider"
import Deposit from "../Deposit"
import MenuButton from "./MenuButton"
import Bookie from "../Bookie"
import Bridge from "../Bridge"
import Gas from "../Gas"
import Withdraw from "../Withdraw"
import Settings from "../Settings"

const Menu = () => {
  const { currentScreen, setCurrentScreen } = useMenu()
  const { setCurrentLayout } = useLayout()

  return (
    <div className="w-full h-full font-blinker relative">
      <SlideHeader title="Menu" onClose={() => setCurrentLayout(LAYOUT.HOME)} />
      <div className="flex flex-col gap-4 py-4 px-4">
        <MenuButton onClick={() => setCurrentScreen(MENU_SCREEN.DEPOSIT)}>
          Deposit From Card
        </MenuButton>
        <MenuButton onClick={() => setCurrentScreen(MENU_SCREEN.BOOKIE)}>
          Become The Bookie
        </MenuButton>
        <MenuButton onClick={() => setCurrentScreen(MENU_SCREEN.BRIDGE)}>Bridge</MenuButton>
        <MenuButton onClick={() => setCurrentScreen(MENU_SCREEN.GAS)}>Gas Station</MenuButton>
        <MenuButton onClick={() => setCurrentScreen(MENU_SCREEN.WITHDRAW)}>
          Withdraw Funds
        </MenuButton>
        <MenuButton onClick={() => setCurrentScreen(MENU_SCREEN.SETTINGS)}>Bet settings</MenuButton>
      </div>
      {currentScreen !== MENU_SCREEN.CLOSED && (
        <SlideLayout className="!border-none !h-full !top-0">
          {currentScreen === MENU_SCREEN.DEPOSIT && <Deposit />}
          {currentScreen === MENU_SCREEN.BOOKIE && <Bookie />}
          {currentScreen === MENU_SCREEN.BRIDGE && <Bridge />}
          {currentScreen === MENU_SCREEN.GAS && <Gas />}
          {currentScreen === MENU_SCREEN.WITHDRAW && <Withdraw />}
          {currentScreen === MENU_SCREEN.SETTINGS && <Settings />}
        </SlideLayout>
      )}
    </div>
  )
}

export default Menu
