import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"

const app = ReactDOM.createRoot(document.getElementById("app"))

const ContorollerForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    msg: "",
  })

  const handleSubmit = e => {
    e.preventDefault()
  }
  const handleChange = e => {
    const { name, value } = e.target
    console.log(name, value)
    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <>
      <form onCSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="name">名前</label>
            <input id="name" type="text" name="name" value={form.name} onChange={handleChange} />
          </li>
          <li>
            <label htmlFor="email">Eメール</label>
            <input id="email" type="email" name="email" value={form.email} onChange={handleChange} />
          </li>
          <li>
            <label htmlFor="msg">メッセージ</label>
            <textarea id="msg" name="msg" value={form.msg} onChange={handleChange}></textarea>
          </li>
        </ul>
        <button type="submit">メッセージを送信</button>
      </form>
    </>
  )
}
app.render(
  <>
    <ContorollerForm />
  </>
)
