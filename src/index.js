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

  const handleChange1 = e => {
    e.target.name = e.target.value
    setPerson({
      ...person,
      name: e.target.name,
    })
  }

  const handleChange2 = e => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    })
  }

  const handleChange3 = e => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    })
  }

  const handleChange4 = e => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    })
  }
  return (
    <>
      <label className="block mb-4">
        Name:
        <input className="ml-4 border-2 border-gray-500 text-xs" name="name" value={person.name} onChange={handleChange1} />
      </label>
      <label className="block mb-4">
        Title:
        <input className="ml-4 border-2 border-gray-500 text-xs" name="title" value={person.artwork.title} onChange={handleChange2} />
      </label>
      <label className="block mb-4">
        City:
        <input className="ml-4 border-2 border-gray-500 text-xs" name="city" value={person.artwork.city} onChange={handleChange3} />
      </label>
      <label className="block mb-4">
        Image:
        <input className="ml-4 border-2 border-gray-500 text-xs" name="image" value={person.artwork.image} onChange={handleChange4} />
      </label>
      {person.artwork.title} By {person.name} (located in {person.artwork.city})
      <img className="mt-4 w-48" src={person.artwork.image} alt="" />
    </>
  )
}

root.render(<Form />)
