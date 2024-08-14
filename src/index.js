import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"

const app = ReactDOM.createRoot(document.getElementById("app"))

const ContorolledForm = () => {
  const [name, setName] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
    console.log(e)
  }
  const handleChange = e => setName(e.target.value)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">名前</label>
        <input id="name" type="text" name="name" value={name} onChange={handleChange}></input>
        <button>送信</button>
      </form>
    </>
  )
}

app.render(
  <>
    <ContorolledForm />
  </>
)
