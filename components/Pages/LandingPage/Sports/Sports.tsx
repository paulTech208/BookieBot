import { useState } from "react"
import Sport from "./Sport"
import sports from "./sports.json"

const Sports = () => {
  const [selectedSport, setSelectedSport] = useState(0)

  return (
    <div
      className="w-full overflow-x-auto gap-[10px]
    flex justify-start itmes-center py-4 px-2"
    >
      {sports.map((sport, i) => (
        <Sport
          data={sport}
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          selected={selectedSport === i}
          toggelSport={() => setSelectedSport(i)}
        />
      ))}
    </div>
  )
}

export default Sports
