import React, { useState } from "react"
import ReactDOM from "react-dom/client"
// import "./index.css";
// import App from "./App"
import reportWebVitals from "./reportWebVitals"
// import { list } from "postcss"

const root = ReactDOM.createRoot(document.getElementById("root"))

const TestComponent = () => {
  const [count, setCount] = useState(0)
  const handleEvent = () => {
    setCount(count + 1)
  }
  return (
    <>
      testUseState <br />
      count: {count} <br />
      <button onClick={handleEvent}>ボタン</button>
      <ChildComponent handleClick={handleEvent} />
    </>
  )
}
const ChildComponent = props => {
  return (
    <>
      child is . <br />
      <button onClick={props.handleClick}>ぼたん</button>
    </>
  )
}
root.render(
  <React.StrictMode>
    <TestComponent />
  </React.StrictMode>
)
