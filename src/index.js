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
  const [name, setName] = useState("")
  const [artists, setArtists] = useState(initialArtists)

  const handleClick = () => {
    const insertAt = 1
    const nextArtists = [
      ...artists.slice(0, insertAt),
      {
        id: nextId++,
        name: name,
      },
      ...artists.slice(insertAt),
    ]
    setArtists(nextArtists)
    setName("")
  }

  return (
    <>
      <h1 className="text-2xl font-semibold">Inspiring sculptors:</h1>
      <input className="mt-2 border-2 text-sm border-gray-300" value={name} onChange={e => setName(e.target.value)}></input>
      <button className="ml-2 bg-gray-400 text-gray-600 px-2 border-2 border-gray-600 font-light rounded-md text-sm" onClick={handleClick}>
        Insert
      </button>
      <ul className="mt-4 text-md text-lg font-light text-gray-700">
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  )
}
root.render(<List />)
