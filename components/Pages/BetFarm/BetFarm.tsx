import AmountButton from "@/components/AmountButton"
import CloseButton from "@/components/CloseButton"
import CoinAmount from "@/components/CoinAmount"
import { LAYOUT, useLayout } from "@/providers/LayoutProvider"
import { useState } from "react"
import Bets from "./Bets"

const BetFarm = () => {
  const { setCurrentLayout } = useLayout()
  const [selectedAmount, setSelectedAmount] = useState(10)

  return (
    <div className="w-full h-full font-blinker">
      <div
        className="px-4 py-3 bg-black_3
            w-full flex justify-between"
      >
        <p>Bet Farming</p>
        <CloseButton onClose={() => setCurrentLayout(LAYOUT.HOME)} />
      </div>
      <div
        className="px-4 py-3
            w-full flex justify-between"
      >
        <div className="flex gap-2">
          <AmountButton amount={10} onClick={() => setSelectedAmount(10)} />
          <AmountButton amount={100} onClick={() => setSelectedAmount(100)} />
          <AmountButton amount={1000} onClick={() => setSelectedAmount(1000)} />
        </div>
        <CoinAmount coinImage="/images/USDT.svg" amount={selectedAmount} />
      </div>
      <Bets />
    </div>
  )
}

export default BetFarm
