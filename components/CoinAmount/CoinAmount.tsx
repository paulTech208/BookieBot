import Media from "@/shared/Media"
import { useEffect, useState } from "react"

const CoinAmount = ({ amount, coinImage }) => {
  const [coinAmount, setCoinAmount] = useState(0)

  const onChangeAmount = (e) => {
    const temp = parseInt(e.target.value, 10)

    if (Number.isNaN(temp)) {
      setCoinAmount(0)
      return
    }
    setCoinAmount(temp)
  }
  useEffect(() => {
    setCoinAmount(amount)
  }, [amount])

  return (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        value={coinAmount}
        className="bg-black !outline-none !border-none
                !text-right"
        onChange={onChangeAmount}
      />
      <Media
        type="image"
        link={coinImage}
        blurLink={coinImage}
        containerClasses="w-[20px] aspect-[1/1]"
      />
    </div>
  )
}

export default CoinAmount
