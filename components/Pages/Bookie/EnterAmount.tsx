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
    <div className="border border-black_4 rounded-md">
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
        <div className="flex gap-2">
          <input
            type="text"
            value={amount}
            className="bg-black !outline-none !border-none
                                !text-right"
            placeholder="Enter amount"
            onChange={onChangeAmount}
          />
          <PairIcons baseIcon="/images/USDT.svg" pairIcon="/images/MATIC_ROUND.svg" size={30} />
        </div>
      </div>
    </div>
  )
}

export default EnterAmount
