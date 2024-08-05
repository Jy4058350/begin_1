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

const isTrue = true

const element = (
  <>
    <div style={{ display: isTrue ? "initial" : "none" }}>表示</div>
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
