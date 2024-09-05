import { useState } from 'react'

export default function BuyClick() {
  const [pending, setPending] = useState(0)
  const [completed, setCompleted] = useState(0)

  function handleClick() {
    setPending(c => c + 1)
    AddBuy(setPending, setCompleted)
  }

  return (
    <>
      <h1>Pending: {pending}</h1>
      <h1>Completed: {completed}</h1>
      <button onClick={handleClick}>Buy</button>
    </>
  )
}

function AddBuy(setPending, setCompleted) {
  setTimeout(c => {
    setPending(c => c - 1)
    setCompleted(c => c + 1)
  }, 1000)
}
