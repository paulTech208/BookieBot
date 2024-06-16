import BaseChains from "./BaseChains"
import BaseTokens from "./BaseTokens"

const BaseCoin = () => (
  <div className="mt-2">
    <p>From</p>
    <div
      className="grid grid-cols-2 rounded-md
            border border-black_4  bg-black p-2"
    >
      <BaseChains />
      <BaseTokens />
    </div>
  </div>
)

export default BaseCoin
