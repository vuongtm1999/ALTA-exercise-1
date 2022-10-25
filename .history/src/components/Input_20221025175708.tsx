type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  }
  
  export const Input = ({ value, handleChange }: InputProps) => {
    let value2
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        value2 = event.target.value
        console.log(event.target.value)
    }
    return <input type='text' value={value2} onChange={handleInputChange} />
  }