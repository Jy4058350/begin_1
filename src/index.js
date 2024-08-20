import React from "react"
import { useState } from "react"
import { useImmer } from "use-immer"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
const counters = [
  { id: 0, count: 0 },
  { id: 1, count: 0 },
  { id: 2, count: 0 },
]
const CounterList = () => {
  return (
    <div>
      {counters.map(counter => (
        <div className="m-4 text-lg" key={counter.id}>
          {counter.count}
          <button className="ml-2 bg-gray-300 text-gray-700 px-2 text-sm border border-gray-500 rounded-sm ">+1</button>
        </div>
      ))}
    </div>
  )
}

root.render(<CounterList />)
