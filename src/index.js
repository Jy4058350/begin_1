import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

const Form = () => {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  })

  const handleChange = e => {}
  return (
    <>
      <label className="block mb-4">
        Name:
        <input className="ml-4 border-2 border-gray-500 text-xs" name="name" value={person.name} onChange={handleChange} />
      </label>
      <label className="block mb-4">
        Title:
        <input className="ml-4 border-2 border-gray-500 text-xs" name="title" value={person.artwork.title} onChange={handleChange} />
      </label>
      <label className="block mb-4">
        City:
        <input className="ml-4 border-2 border-gray-500 text-xs" name="city" value={person.artwork.city} onChange={handleChange} />
      </label>
      <label className="block mb-4">
        Image:
        <input className="ml-4 border-2 border-gray-500 text-xs" name="image" value={person.artwork.image} />
      </label>
      Blue Nana By Niki de Saint Phalle (located in {})
      <img className="mt-4 w-48" src={person.artwork.image} alt="" />
    </>
  )
}

root.render(<Form />)
