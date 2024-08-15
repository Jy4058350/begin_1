import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"

const app = ReactDOM.createRoot(document.getElementById("app"))

const ContorollerForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    contact: "",
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
          <fieldset>
            <legend>性別を選んでください</legend>
            <li>
              <label htmlFor="gender_male">男性</label>
              <input id="gender_male" type="radio" name="gender" value="male" onChange={handleChange} />
            </li>
            <li>
              <label htmlFor="gender_female">女性</label>
              <input id="gender_female" type="radio" name="gender" value="female" onChange={handleChange} />
            </li>
            <li>
              <label htmlFor="gender_other">その他</label>
              <input id="gender_other" type="radio" name="gender" value="other" onChange={handleChange} />
            </li>
          </fieldset>
          <li>
            <label htmlFor="email">Eメール</label>
            <input id="email" type="email" name="email" value={form.email} onChange={handleChange} />
          </li>
          <li>
            <label htmlFor="contact">メッセージ</label>
            <textarea id="contact" name="contact" value={form.contact} onChange={handleChange}></textarea>
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
