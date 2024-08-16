import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

const Checkbox = () => {
  const [liked, setLiked] = useState(true)
  const handleCheck = e => setLiked(e.target.checked)

  return (
    <>
      <label>
        <input type="checkbox" checked={liked} onChange={handleCheck} /> I like this?
      </label>
      <p>You {liked ? "liked" : "dont liked"} this.</p>
    </>
  )
}

root.render(<Checkbox />)
