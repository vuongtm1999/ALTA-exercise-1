import { useRef, useEffect } from 'react'

export const DomRef = () => {
  const inputRef = useRef(null!)
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <div>
      <input type='text' ref={inputRef} />
    </div>
  )
}