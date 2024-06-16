import PairIcons from "@/components/PairIcons"

const Liquidity = () => (
  <div className="bg-black_1 rounded-md px-4 py-2 mt-4">
    <p>Azuro Liquidity Pool</p>
    <div className="flex w-full justify-between items-center mt-2">
      <PairIcons size={30} baseIcon="/images/USDT.svg" pairIcon="/images/MATIC_ROUND.svg" />
      <div>
        <p>Total Value Locked</p>
        <p>7,572,569.02</p>
      </div>
      <div>
        <p>Est. APR</p>
        <p>18.14%</p>
      </div>
    </div>
    <p className="mt-2">
      Deposit USDT into the liquidity pool to get 1-click exposure to all the betting markets on the
      Azuro decentralised betting protocol while growing your Azuro score. Minimum deposit is 10
      USDT and deposits will be locked for 1 week after initial deposit.
    </p>
  </div>
)

export default Liquidity
