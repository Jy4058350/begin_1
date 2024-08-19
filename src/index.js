import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

const Form = () => {
  const [name, setName] = useState({
    first: "山田",
    last: "太郎",
    email: "test@test.com",
  })

  const handlefirstNameChange = e => {
    setName({
      ...name,
      first: e.target.value,
    })
  }
  const handleLastNameChange = e => {
    setName({
      ...name,
      last: e.target.value,
    })
  }
  const handleEmailChange = e => {
    setName({
      ...name,
      email: e.target.value,
    })
  }
  return (
    <div>
      <label className="block" htmlFor="name1">
        first name:
        <input type="text" id="name1" name="first" value={name.first} onChange={handlefirstNameChange} />
      </label>
      <label className="block" htmlFor="name2">
        last name:
        <input type="text" id="name2" name="last" value={name.last} onChange={handleLastNameChange} />
      </label>
      <label className="block" htmlFor="email">
        email:
        <input type="email" id="email" name="email" value={name.email} onChange={handleEmailChange} />
      </label>

      <div>
        苗字は{name.first}です 名前は{name.last}です メールアドレスは{name.email}です
      </div>
    </div>
  )
}

root.render(<Form />)
