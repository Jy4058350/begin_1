import React from "react"
import { useState } from "react"
import { useImmer } from "use-immer"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

const initialList = [
  {
    id: 0,
    title: "Big Bellies",
  },
  { id: 1, title: "Lunar Landscape" },
  {
    id: 2,
    title: "Terracotta Army",
  },
]
const List = () => {
  const [list, setList] = useState(initialList)

  const handleClick = () => {
    let nextList = [...list]
    nextList.reverse()
    setList(nextList)
  }

  return (
    <div>
      <button className="m-4 bg-gray-300 text-gray-800 px-2 border border-gray-800 text-sm rounded-md" onClick={handleClick}>
        Reverse
      </button>
      <ul>
        {list.map(artwork => (
          <li className="ml-4 text-xl font-light" key={artwork.id}>
            {artwork.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

root.render(<List />)
