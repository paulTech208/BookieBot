import Button from "@/components/Button"
import { useState } from "react"

const Odds = () => {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY.AMERICAN)

  return (
    <div className="w-full">
      <p>Odds display</p>
      <div className="w-full grid grid-cols-2 gap-2 pt-2">
        <Button
          selected={selectedCountry === COUNTRY.AMERICAN}
          onClick={() => setSelectedCountry(COUNTRY.AMERICAN)}
        >
          American
        </Button>
        <Button
          selected={selectedCountry === COUNTRY.EUROPEAN}
          onClick={() => setSelectedCountry(COUNTRY.EUROPEAN)}
        >
          European
        </Button>
      </div>
    </div>
  )
}

export default Odds
