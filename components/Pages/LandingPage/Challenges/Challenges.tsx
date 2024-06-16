import Media from "@/shared/Media"
import { useState } from "react"
import Input from "./Input"

const Challenges = ({ data }) => {
  const [selectedInput, setSelectedInput] = useState(null)

  return (
    <div
      className="w-full py-2 px-2 font-blinker
    flex flex-col justify-start items-start"
    >
      <div
        className="w-full flex flex-col justify-start items-start gap-[20px]
      bg-black_1 rounded-md px-4 py-2"
      >
        <div className="w-full flex justify-between">
          <p className="text-sm">{data.time}</p>
          <button
            type="button"
            className="rounded-sm border-[2px] border-green bg-black text-white
          w-[25px] h-[25px] flex justify-center items-center font-blinker"
          >
            +
          </button>
        </div>
        <div className="w-full text-sm flex justify-between font-blinker_semibold">
          <div className="flex justify-start items-center gap-[10px]">
            <Media
              type="image"
              link={data.teamAFlag}
              blurLink={data.teamAFlag}
              containerClasses="h-[30px] aspect-[1/1]"
            />
            {data.teamA}
          </div>
          <p>-</p>
          <div className="flex jsutify-end gap-[10px] items-center">
            {data.teamB}
            <Media
              type="image"
              link={data.teamBFlag}
              blurLink={data.teamBFlag}
              containerClasses="h-[30px] aspect-[1/1]"
            />
          </div>
        </div>
        <div className={`w-full grid ${data?.xBet ? "grid-cols-3" : "grid-cols-2"} gap-2`}>
          <Input
            value={data.teamAScore}
            toggleInput={() => setSelectedInput(selectedInput === 1 ? null : 1)}
            selected={selectedInput === 1}
          />
          {data?.xBet && (
            <Input
              value={data.xBet}
              toggleInput={() => setSelectedInput(selectedInput === 1 ? null : 1)}
              selected={selectedInput === 1}
            />
          )}
          <Input
            value={data.teamBScore}
            toggleInput={() => setSelectedInput(selectedInput === 2 ? null : 2)}
            selected={selectedInput === 2}
          />
        </div>
      </div>
    </div>
  )
}

export default Challenges
