
import React, { useState, createContext } from 'react'

type AuthUser = {
  name: string
  email: string
}

type UserContextType = {
  user: AuthUser | null
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps = {
  children: React.ReactNode
}

// Chi dinh kieu tra ve cua ham createContext là UserContextType hoặc null
// export const UserContext = createContext<UserContextType | null>(null)
// ngầm định kiểu trả về của hàm createContext là UserContextType
export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}