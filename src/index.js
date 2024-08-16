import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

const App = () => {
  const [text, setText] = useState("こんにちは")

  const handleChange = e => {
    const value = e.target.value
    //ここに三項演算子をつかって、valueが空文字の場合は「未入力」と表示するようにしてください

    e.target.value ? setText(value) : setText("未入力")
  }

  return (
    <>
      <input id="text" name="text" value={text} onChange={handleChange} onClick={() => setText("")} />
      <div>入力テキスト：{text}</div>
      <button className="m-4 bg-gray-300 text-white px-3 py-2 rounded-md" onClick={() => setText("こんにちは")}>
        rest
      </button>
    </>
  )
}

root.render(<App />)
