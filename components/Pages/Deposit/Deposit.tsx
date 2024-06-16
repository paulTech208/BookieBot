import SlideHeader from "@/components/SlideHeader"
import { MENU_SCREEN, useMenu } from "@/providers/MenuProvider"
import Media from "@/shared/Media"
import MenuButton from "../Menu/MenuButton"

const Deposit = () => {
  const { setCurrentScreen } = useMenu()

  return (
    <div className="w-full h-full">
      <SlideHeader title="Deposit From Card" onClose={() => setCurrentScreen(MENU_SCREEN.CLOSED)} />
      <p className="px-4 py-3 text-xl">Polygon</p>
      <div className="px-4">
        <MenuButton className="!px-4 !w-full">
          <div className="flex gap-2">
            <Media
              type="image"
              link="/images/USDT.svg"
              blurLink="/images/USDT.svg"
              containerClasses="w-[30px] aspect-[1/1]"
            />
            Buy USDT
          </div>
        </MenuButton>
      </div>
      <p className="px-4 py-3 text-xl">Optimism</p>
      <div className="px-4 w-full flex flex-col gap-4">
        <MenuButton className="!px-4 !w-full">
          <div className="flex gap-2">
            <Media
              type="image"
              link="/images/USDC.svg"
              blurLink="/images/USDC.svg"
              containerClasses="w-[30px] aspect-[1/1]"
            />
            Buy USDC
          </div>
        </MenuButton>
        <MenuButton className="!px-4 !w-full">
          <div className="flex gap-2">
            <Media
              type="image"
              link="/images/ETH.svg"
              blurLink="/images/ETH.svg"
              containerClasses="w-[30px] aspect-[1/1]"
            />
            Buy ETH
          </div>
        </MenuButton>
      </div>
    </div>
  )
}

export default Deposit
