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

const num = 2
const num2 = 2

const element = (
  <>
    {/* JSX内でif文は書けない */}
    if(num === num2 && ) {<div>表示</div>}
    {num === num2 && <div>同じ値です</div>}
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
