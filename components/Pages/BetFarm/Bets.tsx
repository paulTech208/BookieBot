import Bet from "./Bet"
import bets from "./betsData"

const Bets = () => (
  <div
    className="px-3 border-t border-t-black_3 py-6
        flex flex-col gap-3"
  >
    {bets.map((bet, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Bet key={i} data={bet} />
    ))}
  </div>
)

export default Bets
