import React from "react"
import { useImmer } from "use-immer"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

const Form = () => {
  const [person, updatePerson] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  })

  function handleChange1(e) {
    updatePerson(draft => {
      draft.name = e.target.value
    })
  }

  function handleChange2(e) {
    updatePerson(draft => {
      draft.artwork.title = e.target.value
    })
  }

  function handleChange3(e) {
    updatePerson(draft => {
      draft.artwork.city = e.target.value
    })
  }

  function handleChange4(e) {
    updatePerson(draft => {
      draft.artwork.image = e.target.value
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
      <img className="mt-4 w-48" src={person.artwork.image} alt={person.artwork.title} />
    </>
  )
}

root.render(<Form />)
