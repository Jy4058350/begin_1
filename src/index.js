import React from "react"
import ReactDOM from "react-dom/client"
// import "./index.css";
import App from "./App"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"))

const ParentChild = () => {
  return (
    <>
      親です。
      <ChildComponent name="伊藤" email="test@example.com" />
    </>
  )
}

const ChildComponent = ({ name, email }) => {
  return (
    <>
      子です。
      <br />
      それから。
      <br />
      <span className="block">名前は{name}です。</span>
      <span className="block">emailは{email}です</span>
    </>
  )
}

root.render(<ParentChild />)
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
