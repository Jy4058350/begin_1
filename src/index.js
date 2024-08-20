import React from "react"
import { useState } from "react"
import { useImmer } from "use-immer"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
let nextId = 0
const List = () => {
  const [name, setName] = useState("")
  const [artists, setArtists] = useState([])

  const handleChange = e => {
    setName(e.target.value)
  }
  const handleClick = () => {
    artists.push({
      id: nextId++,
      name: name,
    })
  }
  return (
    <div className="text-2xl font-semibold mx-4 my-4">
      Inspiring sculptors:
      <input className="inline-block border text-xs my-4" name="name" value={name} onChange={handleChange} />
      <button className=" bg-gray-400 text-black text-sm px-4 py-2 rounded-md" onClick={handleClick}>
        Add
      </button>
      <ul>
        {artists.map(artist => {
          return <li key={artist.id}>{artist.name}</li>
        })}
      </ul>
    </div>
  )
}

root.render(<List />)
