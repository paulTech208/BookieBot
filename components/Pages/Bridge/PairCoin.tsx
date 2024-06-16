import PairChains from "./PairChains"
import PairTokens from "./PairTokens"

const PairCoin = () => (
  <div className="mt-2">
    <p>To</p>
    <div
      className="grid grid-cols-2 rounded-md
            border border-black_4  bg-black p-2"
    >
      <PairChains />
      <PairTokens />
    </div>
  </div>
)

export default PairCoin
