import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

const MyForm = () => {
  const [name, setName] = useState("You")
  const handleName = e => {
    setName(e.target.value)
  }

  const [age, setAge] = useState(42)
  const handleClick = e => {
    setAge(age + 1)
  }

  return (
    <>
      <div className="m-8">
        <input className=" mb-4 border border-gray-200" type="text" value={name} onChange={handleName} />
        <p className="mb-4">
          Hello {name} are {age}
        </p>
        <button className="bg-gray-300 text-white p-4 rounded-md" onClick={handleClick}>
          Increment age
        </button>
      </div>
    </>
  )
}
root.render(<MyForm />)
