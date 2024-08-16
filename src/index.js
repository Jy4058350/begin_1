import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

const App = () => {
  const [text, setText] = useState("こんにちは")

  const handleChange = e => {
    setText(e.target.value)
  }

  const handleBlur = () => {
    if (text === "") {
      setText("こんにちは")
    }
  }

  return (
    <>
      <input id="text" name="text" value={text} onChange={handleChange} onClick={() => setText("")} onBlur={handleBlur} />
      <div>入力テキスト：{text}</div>
      <button className="m-4 bg-gray-300 text-white px-3 py-2 rounded-md" onClick={() => setText("こんにちは")}>
        rest
      </button>
    </>
  )
}

root.render(<App />)
