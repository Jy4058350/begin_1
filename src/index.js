import React, { useState } from "react"
import ReactDOM from "react-dom/client"
// import "./index.css";
// import App from "./App"
import reportWebVitals from "./reportWebVitals"
// import { list } from "postcss"

const root = ReactDOM.createRoot(document.getElementById("root"))

const TestUseState = () => {
  const [count, setCount] = useState(0)
  console.log(`コンポーネント表示${count}`)
  const handleClick = () => {
    setCount(count + 1)
    console.log(`関数内での表示${count}`)
  }
  return (
    <>
      test useState
      <br />
      count is {count}
      <br />
      <button onClick={handleClick}>ボタン</button>
    </>
  )
}

root.render(
  <React.StrictMode>
    <TestUseState />
  </React.StrictMode>
)
