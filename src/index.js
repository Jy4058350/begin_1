import React, { useState } from "react"
import ReactDOM from "react-dom/client"
// import "./index.css";
// import App from "./App"
import reportWebVitals from "./reportWebVitals"
// import { list } from "postcss"

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(root)

const TestComponent = () => {
  const [count, setCount] = useState(0)
  const handleEvent = () => {
    setCount(count => {
      console.log(count)
      return count + 1
    })
  }
  return (
    <>
      testUseState <br />
      <button onClick={handleEvent}>ボタン</button>
    </>
  )
}

root.render(
  <React.StrictMode>
    <TestComponent />
  </React.StrictMode>
)
