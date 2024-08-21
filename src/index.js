import React from "react"
import { useState } from "react"
import { useImmer } from "use-immer"
import ReactDOM from "react-dom/client"
import "./styles.css"

let nextId = 3
const root = ReactDOM.createRoot(document.getElementById("root"))
const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
]
const List = () => {
  const [artists, setArtists] = useState(initialArtists)
  const [newArtists, setNewArtists] = useState("")
  const handleChange = e => {
    setNewArtists(e.target.value)
  }
  const handleClick = () => {
    const newList = [
      ...artists,
      {
        id: nextId++,
        name: newArtists,
      },
    ]
    console.log(newList)
    setArtists(newList)
  }

  return (
    <div className="text-2xl font-semibold">
      Inspiring sculptors:
      <input className="mt-2 border-2 text-sm border-gray-300" value={newArtists} onChange={handleChange}></input>
      <button className="ml-2 bg-gray-400 text-gray-600 px-2 border-2 border-gray-600 font-light rounded-md text-sm" onClick={handleClick}>
        Insert
      </button>
      <ul className="mt-4 text-md text-lg font-light text-gray-700">
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  )
}
root.render(<List />)
