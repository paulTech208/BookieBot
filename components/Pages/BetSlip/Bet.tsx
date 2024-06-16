import PlusButton from "@/components/PlusButton"
import Media from "@/shared/Media"

const Bet = ({ data }) => (
  <div className="bg-black_1 px-4 py-2 rounded-md">
    <div className="w-full flex justify-between">
      <div>
        <p className="text-sm">{data.teams}</p>
        <p className="text-black_4 text-sm">
          {data.date} - <span className="text-green">{data.slot}</span>
        </p>
      </div>
      <PlusButton />
    </div>
    <div className="flex gap-8 items-start mt-4">
      <div>
        <p className="text-black_4 text-sm">Spread</p>
        <p>{data.spread}%</p>
      </div>
      <div>
        <p className="text-black_4 text-sm">Scored earned</p>
        <div className="flex gap-1 items-center">
          <p>{data.earned}</p>
          <Media
            type="image"
            link="/images/azuro.png"
            blurLink="/images/azuro.png"
            containerClasses="w-[15px] aspect-[1/1]"
          />
        </div>
      </div>
    </div>
  </div>
)

export default Bet
