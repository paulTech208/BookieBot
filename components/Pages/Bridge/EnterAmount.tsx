import PairIcons from "@/components/PairIcons"
import { useState } from "react"

const EnterAmount = () => {
  const [amount, setAmount] = useState(0)

  const onChangeAmount = (e) => {
    const temp = parseInt(e.target.value, 10)

    if (Number.isNaN(temp)) {
      setAmount(0)
      return
    }
    setAmount(temp)
  }

  return (
    <div className="border border-black_4 rounded-md bg-black">
      <p className="p-2 text-right">Balance: 0.000000</p>
      <div
        className="p-2 border-black_4 border-t
            w-full flex justify-between"
      >
        <button
          type="button"
          className="border border-green_1 rounded-sm
                hover:border-green px-2 text-green_1 hover:text-green"
        >
          MAX
        </button>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={amount}
            className="!bg-black_4 !outline-none !border-none
                                !text-right !box-shadow-none text-white_1"
            placeholder="0"
            onChange={onChangeAmount}
          />
          <PairIcons baseIcon="/images/USDT.svg" size={20} />
        </div>
      </div>
    </div>
  )
}

export default EnterAmount
