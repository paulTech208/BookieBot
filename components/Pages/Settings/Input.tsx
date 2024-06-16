import { useEffect, useState } from "react"

const Input = ({ value }) => {
  const [amount, setAmount] = useState(0)

  const onChangeAmount = (e) => {
    const temp = parseInt(e.target.value, 10)

    if (Number.isNaN(temp)) {
      setAmount(0)
      return
    }
    setAmount(temp)
  }

  useEffect(() => {
    setAmount(value)
  }, [value])

  return (
    <input
      className="w-full !outline-none !border-none text-white !bg-black
            p-2 rounded-md"
      value={amount}
      onChange={onChangeAmount}
    />
  )
}

export default Input
