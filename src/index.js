import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"


const root = ReactDOM.createRoot(document.getElementById("root"))

const Form = () => {
  const [person, setPerson] = useState({
    first: "山田",
    last: "太郎",
    email: "test@test.com",
  })

  const handleChange = e => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div>
      <label className="block" htmlFor="name1">
        first person:
        <input type="text" id="name1" person="first" value={person.first} onChange={handleChange} />
      </label>
      <label className="block" htmlFor="name2">
        last person:
        <input type="text" id="name2" person="last" value={person.last} onChange={handleChange} />
      </label>
      <label className="block" htmlFor="email">
        email:
        <input type="email" id="email" person="email" value={person.email} onChange={handleChange} />
      </label>

      <div>
        苗字は{person.first}です 名前は{person.last}です メールアドレスは{person.email}です
      </div>
    </div>
  )
}

root.render(<Form />)
