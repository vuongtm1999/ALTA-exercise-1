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
}: ThemeContextProviderProps) => {
    //2 thuộc tính value là giá trị mặc định
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}