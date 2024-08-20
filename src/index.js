import React from "react"
import { useState } from "react"
import { useImmer } from "use-immer"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
]

const List = () => {
  const [artists, setArtists] = useState(initialArtists)

  const handleClick = artist => {
    setArtists(artists.filter(a => a.id !== artist.id))
  }

  return (
    <div className="text-2xl font-semibold mx-4 my-4">
      Inspiring sculptors:
      <ul>
        {initialArtists.map(artist => (
          <li className="mt-0 text-lg font-normal" key={artist.id}>
            {artist.name}
            <button
              className="ml-4 px-2 py-1 bg-gray-200 text-xs text-black font-light border-2 border-gray-500 rounded-md"
              onClick={() => handleClick(artist)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

root.render(<List />)
