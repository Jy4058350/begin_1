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

  const handleChange = e => {
    const { name, value } = e.target
    // console.log(name, email, msg)
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      {/* <form className="mt-8" action="#damy" method="post" onSubmit={handleSubmit}> */}
      <form onSubmit={handleSubmit}>
        <ul>
          <li className="mt-4">
            <label htmlFor="name">名前</label>
            <input className="border-2 border-gray-200" type="text" id="name" name="name" value={form.name} onChange={handleChange} />
          </li>
          <li className="mt-4">
            <label htmlFor="email">Eメール</label>
            <input className="border-2 border-gray-200" type="email" id="email" name="email" value={form.email} onChange={handleChange} />
          </li>
          <li className="mt-4">
            <label htmlFor="msg">メッセージ</label>
            <textarea className="border-2 border-gray-200" id="msg" value={form.msg} name="msg" onChange={handleChange}></textarea>
          </li>
          <li className="button mt-8">
            <button type="submit">メッセージを送信</button>
          </li>
        </ul>
      </form>
    </>
  )
}

app.render(
  <>
    <ContorollerForm />
  </>
)
