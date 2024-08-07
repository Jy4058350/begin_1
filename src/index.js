import React from "react"
import ReactDOM from "react-dom/client"
// import "./index.css";
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { list } from "postcss"

const root = ReactDOM.createRoot(document.getElementById("root"))

const ParentComponent = () => {
  return (
    <>
      親です <br />
      <ChildComponent name="douan" />
    </>
  )
}
const ChildComponent = ({ name = "test" }) => {
  return <>子です。 {name}</>
}
root.render(<ParentComponent />)
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
