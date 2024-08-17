import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

const MyForm = () => {
  const [name, setName] = useState("You")

  const [age, setAge] = useState(42)

  return (
    <>
      <div className="m-8">
        <input className=" block mb-4 border border-gray-200" type="text" value={name} onChange={e => setName(e.target.value)} />
        <button className="mb-4 bg-gray-300 text-white px-4 py-2 rounded-md" onClick={() => setAge(age + 1)}>
          Increment age
        </button>
        <p className="">
          Hello {name} are {age}
        </p>
      </div>
    </>
  )
}
root.render(<MyForm />)
