import React from "react"
import { useState } from "react"
import { useImmer } from "use-immer"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

const initialList = [
  { id: 0, title: "Big Bellies" },
  { id: 1, title: "Lunar Landscape" },
  { id: 2, title: "Terracotta Army" },
]
const List = () => {
  const [arts, setArts] = useState(initialList)
  const [arts2, setArts2] = useState(initialList)
  return (
    <div className="m-4">
      <h1 className="mb-2 text-2xl font-bold">Art Bucket List</h1>

      <h2 className="mb-2 text-xl font-normal">My list of art to see:</h2>
      <ul>
        {arts.map(art => {
          return (
            <div key={art.id}>
              <input type="checkbox" className="mb-2 text-xs font-normal" />
              <label>{art.title}</label>
            </div>
          )
        })}
      </ul>

      <h2 className="mb-2 text-xl font-normal">Your list of art to see:</h2>
      <ul>
        {arts2.map(art => {
          return (
            <div key={art.id}>
              <input type="checkbox" className="mb-2 text-xs font-normal" />
              <label>{art.title}</label>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

root.render(<List />)
