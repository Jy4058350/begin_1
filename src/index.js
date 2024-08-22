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
  console.log("myList", myList)
  const [yourList, setYourList] = useState(initialList)

  const handleToggleMyList = () => {}

  const handleToggleYourList = () => {}

  return (
    <div className="m-4">
      <h1 className="mb-2 text-2xl font-bold">Art Bucket List</h1>
      <h2 className="mb-2 text-xl font-normal">My list of art to see:</h2>
      <ItemList artworks={myList} />
      <h2 className="mb-2 text-xl font-normal">Your list of art to see:</h2>
      {/* <ItemList /> */}
    </div>
  )
}

const ItemList = ({ artworks }) => {
  console.log(artworks)
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>{artwork.title}</li>
      ))}
    </ul>
  )
}

root.render(<List />)
