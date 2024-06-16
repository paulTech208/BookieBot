import Button from "@/components/Button"
import { useState } from "react"

export enum PERCENTAGE {
  HALF_PERCENT = "HALF_PERCENT",
  ONE_PERCENT = "ONE_PERCENT",
  FIVE_PERCENT = "FIVE_PERCENT",
}

const Footer = () => {
  const [selectedPercent, setSelectedPercent] = useState(PERCENTAGE.HALF_PERCENT)
  return (
    <div
      className="border-t border-t-black_3 px-4 py-2
          !absolute bottom-0 w-full left-0"
    >
      <p>Slippage</p>
      <div className="w-full grid grid-cols-3 gap-2 mb-2">
        <Button
          selected={selectedPercent === PERCENTAGE.HALF_PERCENT}
          onClick={() => setSelectedPercent(PERCENTAGE.HALF_PERCENT)}
        >
          0.5%
        </Button>
        <Button
          selected={selectedPercent === PERCENTAGE.ONE_PERCENT}
          onClick={() => setSelectedPercent(PERCENTAGE.ONE_PERCENT)}
        >
          1%
        </Button>
        <Button
          selected={selectedPercent === PERCENTAGE.FIVE_PERCENT}
          onClick={() => setSelectedPercent(PERCENTAGE.FIVE_PERCENT)}
        >
          3%
        </Button>
      </div>
      <p>Gas Estimate</p>
      <Button className="!bg-green !mt-4">Bridge</Button>
    </div>
  )
}

export default Footer
