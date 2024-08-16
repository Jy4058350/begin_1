import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

const Checkbox = () => {
  const [text, setText] = useState("You did not like this")
  const handleCheck = e => {
    setText(e.target.checked ? "You liked this" : "You did not like this")
  }
  return (
    <>
      <label>
        <input type="checkbox" onChange={handleCheck} /> I like this?
      </label>
      <p>{text}</p>
    </>
  )
}

root.render(<Checkbox />)
