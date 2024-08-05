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

const testfunction = (num1, num2) => {
  return num1 + num2
}

const testfunc1 = (num1, num2) => {
  return num1 * num2
}

const element = (
  <p style={cssVariable} className="text-gray-100 bg-blue-300">
    {
      //コメント
    }
    {/* コメントです */}
    {testfunction(1, 2)}と{testfunc1(4, 5)}
  </p>
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
