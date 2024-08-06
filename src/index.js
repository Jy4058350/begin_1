import React from "react"
import ReactDOM from "react-dom/client"
// import "./index.css";
import App from "./App"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"))
const sampleText = "サンプルテキスト"
const cssVariable = {
  fontSize: "1.25rem",
  fontWeight: 600,
}

const handleClick = e => console.log("ボタンがクリックされました")
const handleClick2 = e => console.log(e.target.textContent)
const handleClick3 = init => console.log(`引数は${init}だよ`)

const element = (
  <>
    <button onClick={handleClick}>ボタン</button>
    <button onClick={handleClick2}>ボタン2だよ</button>
    <button onClick={() => handleClick3(3)}>ボタン3だよ</button>
  </>
)

root.render(element)
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
