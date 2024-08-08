import React, { useState } from "react"
import ReactDOM from "react-dom/client"
// import "./index.css";
// import App from "./App"
import reportWebVitals from "./reportWebVitals"
// import { list } from "postcss"

const root = ReactDOM.createRoot(document.getElementById("root"))

const UseState = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <>
      useState <br />
      カウント：{count} <br />
      <button onClick={handleClick}>ボタン</button>
    </>
  )
}

root.render(
  <React.StrictMode>
    <UseState />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
