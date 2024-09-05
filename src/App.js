import { useState } from 'react'

export default function BuyClick() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  function handleClick() {
    setCount(c => c + 1)
    AddBuy(setCount, setCount1)
  }

  return (
    <>
      <h1>Pending: {count}</h1>
      <h1>Completed: {count1}</h1>
      <button onClick={handleClick}>Buy</button>
    </>
  )
}

function AddBuy(setCount, setCount1) {
  setTimeout(c => {
    setCount(c => c - 1)
    setCount1(c => c + 1)
  }, 1000)
}
