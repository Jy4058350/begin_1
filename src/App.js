import { useState } from 'react'

export default function Counter() {
  const [number, setNumber] = useState(0)

  function handleClick() {
    //これは間違い
    setNumber(number + 5)
    setNumber(n => n + 1)
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>Increase the number</button>
    </>
  )
}
