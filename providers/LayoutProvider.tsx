import { createContext, useContext, useMemo, useState } from "react"

const LayoutContext = createContext(null)

export enum LAYOUT {
  HOME = "HOME",
  BET_FARM = "BET_FARM",
  BET_SLIP = "BET_SLIP",
  MY_BETS = "MY_BETS",
  MENU = "MENU",
}
export const LayoutProvider = ({ children }) => {
  const [currentLayout, setCurrentLayout] = useState(LAYOUT.HOME)

  const values = useMemo(
    () => ({
      currentLayout,
      setCurrentLayout,
    }),
    [currentLayout, setCurrentLayout],
  )

  return <LayoutContext.Provider value={values}>{children}</LayoutContext.Provider>
}

export const useLayout = () => useContext(LayoutContext)
