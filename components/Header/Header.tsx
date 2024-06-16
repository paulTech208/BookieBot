import Media from "@/shared/Media"
import { ConnectButton } from "@rainbow-me/rainbowkit"

const Header = () => (
  <div className="w-full py-2 px-2 flex justify-between">
    <Media
      type="image"
      link="/images/bb-logo.png"
      blurLink="/images/bb-logo.png"
      containerClasses="w-[71px] aspect-[71/25]"
    />
    <ConnectButton />
  </div>
)

export default Header
