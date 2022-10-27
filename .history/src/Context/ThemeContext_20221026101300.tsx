import React, { createContext } from 'react'
import { theme } from './theme'

type ThemeContextProviderProps = {
  children: React.ReactNode
}

//1
export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({
  children
}: ThemeContextProviderProps) => {
    //2
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}