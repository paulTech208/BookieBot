import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SlideLayout from "@/components/Layout/SlideLayout"
import { LAYOUT, useLayout } from "@/providers/LayoutProvider"
import { MenuProvider } from "@/providers/MenuProvider"
import Hero from "./Hero"
import Sports from "./Sports"
import Brand from "./Brand"
import Challenges from "./Challenges/Challenges"
import games from "./games.json"
import BetFarm from "../BetFarm"
import BetSlip from "../BetSlip/BetSlip"
import MyBets from "../MyBets"
import Menu from "../Menu"

const LandingPage = () => {
  const { currentLayout } = useLayout()

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full md:w-[560px] rounded-xl border-white border-[10px] mx-auto">
        <div
          className="relative bg-black_2 text-white
          border-[1px] !h-[600px] overflow-hidden"
        >
          <Header />
          <div className="w-full h-[calc(100%-105px)] overflow-y-auto">
            <Hero />
            <Sports />
            <div className="w-full px-2 py-3">
              <Brand />
            </div>
            {games.map((game, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Challenges data={game} key={i} />
            ))}
          </div>
          <Footer />
          {currentLayout !== LAYOUT.HOME && (
            <SlideLayout>
              {currentLayout === LAYOUT.BET_FARM && <BetFarm />}
              {currentLayout === LAYOUT.BET_SLIP && <BetSlip />}
              {currentLayout === LAYOUT.MY_BETS && <MyBets />}
              {currentLayout === LAYOUT.MENU && (
                <MenuProvider>
                  <Menu />
                </MenuProvider>
              )}
            </SlideLayout>
          )}
        </div>
      </div>
    </div>
  )
}

export default LandingPage
