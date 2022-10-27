import React, { createContext } from 'react'
import { theme } from './theme'

//2
type ThemeContextProviderProps = {
  children: React.ReactNode
}

//1
export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({
  children
}: any) => {
    //2
  return <ThemeContext.Provider value={"test"}>{children}</ThemeContext.Provider>
}