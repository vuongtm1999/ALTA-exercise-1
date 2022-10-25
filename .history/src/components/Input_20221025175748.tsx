type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  }
  
  export const Input = ({ value, handleChange }: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        value = event.target.value
        console.log(event.target.value)
    }
    return <input type='text' value={value} onChange={handleInputChange} />
  }