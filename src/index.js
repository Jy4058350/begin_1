import React from "react"
import { useState } from "react"
import { useImmer } from "use-immer"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

const initialList = [
  {
    id: 0,
    name: "Big Bellies",
  },
  { id: 1, name: "Lunar Landscape" },
  {
    id: 2,
    name: "Terracotta Army",
  },
]
const List = () => {
  const [names, setNames] = useState(initialList)
  return (
    <div>
      <button className="m-4 bg-gray-300 text-gray-800 px-2 border border-gray-800 text-sm rounded-md">Reverse</button>
      <ul>
        {names.map(name => (
          <li className="ml-4 text-xl font-light" key={name.id}>
            {name.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

root.render(<List />)
