import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"


const root = ReactDOM.createRoot(document.getElementById("root"))

const App = () => {
  const [text, setText] = useState("こんにちは")
  const [isFirstClick, setIsFirstClick] = useState(true)

  const handleChange = e => {
    setText(e.target.value)
  }

  const handleBlur = () => {
    if (text === "") {
      setText("こんにちは")
    }
  }

  const handleClick = e => {
    if (isFirstClick) {
      setText("")
      setIsFirstClick(false)
    }
  }

  const handleReset = () => {
    setText("こんにちは")
    setIsFirstClick(true)
  }

  return (
    <>
      <input id="text" name="text" value={text} onChange={handleChange} onClick={handleClick} onBlur={handleBlur} />
      <div>入力テキスト：{text}</div>
      <button className="m-4 bg-gray-300 text-white px-3 py-2 rounded-md" onClick={handleReset}>
        rest
      </button>
    </>
  )
}

root.render(<App />)
=======


const app = ReactDOM.createRoot(document.getElementById("app"))

const ContorollerForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
    contact: "",
  })

  const handleSubmit = e => {
    e.preventDefault()
    console.log(form)
  }
  const handleChange = e => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const ages = [
    {
      id: 0,
      generation: "10代",
    },
    {
      id: 1,
      generation: "20代",
    },
    {
      id: 2,
      generation: "30代",
    },
    {
      id: 3,
      generation: "40代",
    },
    {
      id: 4,
      generation: "50代",
    },
    {
      id: 5,
      generation: "60代",
    },
    {
      id: 6,
      generation: "70代",
    },
  ]

  return (
    <>
      <form onSubmit={handleSubmit}>
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
            <label htmlFor="age">年代</label>
            <select id="age" name="age" value={form.age} onChange={handleChange}>
              <option value="">選択してください</option>
              {ages.map(age => (
                <option key={age.id} value={age.id}>
                  {age.generation}
                </option>
              ))}
            </select>
          </li>
          <li>
            <label htmlFor="email">Eメール</label>
            <input id="email" type="email" name="email" value={form.email} onChange={handleChange} />
          </li>
          <li>
            <label htmlFor="contact">コンタクト</label>
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


