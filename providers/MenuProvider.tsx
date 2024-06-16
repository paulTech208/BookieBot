import { createContext, useContext, useMemo, useState } from "react"

const MenuContext = createContext(null)

export enum MENU_SCREEN {
  CLOSED = "CLOSED",
  DEPOSIT = "DEPOSIT",
  BOOKIE = "BOOKIE",
  BRIDGE = "BRIDGE",
  GAS = "GAS",
  WITHDRAW = "WITHDRAW",
  SETTINGS = "SETTINGS",
}
export const MenuProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState(MENU_SCREEN.CLOSED)

  const values = useMemo(
    () => ({
      currentScreen,
      setCurrentScreen,
    }),
    [currentScreen, setCurrentScreen],
  )

  return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>
}

export const useMenu = () => useContext(MenuContext)
