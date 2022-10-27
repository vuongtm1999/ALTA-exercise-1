import { useState } from "react"

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  }
  
  export const Input = ({ value, handleChange }: InputProps) => {
    // const [myValue, setValue] = useState("")
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue(event.target.value)
    //     console.log(event.target.value)
    // }
    return <input type='text' value={myValue} onChange={handleInputChange} />
  }