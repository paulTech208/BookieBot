import Button from "@/components/Button"
import { useState } from "react"

export enum TIMES_OPT {
  AMPM = "AMPM",
  HR24 = "HR24",
}
const Times = () => {
  const [selectedOption, setSelectedOption] = useState(TIMES_OPT.AMPM)

  return (
    <div className="w-full">
      <p>Time display</p>
      <div className="w-full grid grid-cols-2 gap-2 pt-2">
        <Button
          selected={selectedOption === TIMES_OPT.AMPM}
          onClick={() => setSelectedOption(TIMES_OPT.AMPM)}
        >
          AM / PM
        </Button>
        <Button
          selected={selectedOption === TIMES_OPT.HR24}
          onClick={() => setSelectedOption(TIMES_OPT.HR24)}
        >
          24H
        </Button>
      </div>
    </div>
  )
}

export default Times
