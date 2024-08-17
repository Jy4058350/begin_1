import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

const Counter = () => {
  const [count, setCount] = useState(42)

  const increment = () => {
    setCount(count + 1)
  }
  return (
    <>
      <h1>Your age:{count}</h1>
      <button
        className="m-4 px-4 py-2 w-20 bg-gray-500 text-white rounded-md block"
        onClick={() => {
          increment()
          increment()
          increment()
        }}
      >
        +3
      </button>
      <button className="m-4 px-4 py-2 w-20   bg-gray-500 text-white rounded-md block" onClick={() => setCount(count + 1)}>
        +1
      </button>
    </>
  )
}

root.render(<Counter />)
