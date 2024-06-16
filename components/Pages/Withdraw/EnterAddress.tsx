import { useState } from "react"

const EnterAddress = () => {
  const [address, setAddress] = useState("")

  return (
    <div
      className="border border-black_4 rounded-md
    w-full flex justify-end p-2 pb-6"
    >
      <input
        type="text"
        value={address}
        className="bg-black !outline-none !border-none
                            !text-right"
        placeholder="Enter address"
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
  )
}

export default EnterAddress
