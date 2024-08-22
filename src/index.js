import React from "react"
import { useState } from "react"
import { useImmer } from "use-immer"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
]
const List = () => {
  const [myList, setMyList] = useState(initialList)
  const [yourList, setYourList] = useState(initialList)

  const handleToggleMyList = () => {}

  const handleToggleYourList = () => {}

  return (
    <div className="m-4">
      <h1 className="mb-2 text-2xl font-bold">Art Bucket List</h1>
      <h2 className="mb-2 text-xl font-normal">My list of art to see:</h2>
      <ItemList artworks={myList} toggle={handleToggleMyList} />
      <h2 className="mt-4 mb-2 text-xl font-normal">Your list of art to see:</h2>
      <ItemList artworks={yourList} toggle={handleToggleYourList} />
    </div>
  )
}

const ItemList = ({ artworks, toggle }) => {
  return (
    <ul className="mt-4">
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <input type="checkbox" checked={artwork.seen} onChange={toggle} className="m-2" />
          {artwork.title}
        </li>
      ))}
    </ul>
  )
}

root.render(<List />)
