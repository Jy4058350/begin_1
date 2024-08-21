import React from "react"
import { useState } from "react"
import { useImmer } from "use-immer"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
const initialCounters = [0, 0, 0]
const CounterList = () => {
  const [counters, setCounters] = useState(initialCounters)

  const handleClick = index => {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1
      } else {
        return c
      }
    })
    setCounters(nextCounters)
  }
  return (
    <ul>
      {counters.map((counter, i) => (
        <li className="m-4 text-lg" key={i}>
          {counter}
          <button className="ml-2 bg-gray-300 text-gray-700 px-2 text-sm border border-gray-500 rounded-sm " onClick={() => handleClick(i)}>
            +1
          </button>
        </li>
      ))}
    </ul>
  )
}

root.render(<CounterList />)
