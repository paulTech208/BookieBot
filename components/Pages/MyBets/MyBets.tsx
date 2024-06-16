import Button from "@/components/Button"
import CloseButton from "@/components/CloseButton"
import { LAYOUT, useLayout } from "@/providers/LayoutProvider"
import { useState } from "react"

export enum BUTTON_STATUS {
  WINNING = "WINNING",
  PENDING = "PENDING",
  ALL = "ALL",
}
const MyBets = () => {
  const { setCurrentLayout } = useLayout()
  const [selectedButton, setSelectedButton] = useState(BUTTON_STATUS.WINNING)

  return (
    <div className="w-full h-full font-blinker relative">
      <div
        className="px-4 py-3 bg-black_3
                    w-full flex justify-between"
      >
        <p>My Bets</p>
        <CloseButton onClose={() => setCurrentLayout(LAYOUT.HOME)} />
      </div>
      <div
        className="absolute bottom-0 left-0 w-full
            grid grid-cols-3 border-t border-t-black_4
            py-2 px-4 gap-2"
      >
        <Button
          selected={selectedButton === BUTTON_STATUS.WINNING}
          onClick={() => setSelectedButton(BUTTON_STATUS.WINNING)}
        >
          Winning bets
        </Button>
        <Button
          selected={selectedButton === BUTTON_STATUS.PENDING}
          onClick={() => setSelectedButton(BUTTON_STATUS.PENDING)}
        >
          Pending bets
        </Button>
        <Button
          selected={selectedButton === BUTTON_STATUS.ALL}
          onClick={() => setSelectedButton(BUTTON_STATUS.ALL)}
        >
          All bets
        </Button>
      </div>
    </div>
  )
}

export default MyBets
