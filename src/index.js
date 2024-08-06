import React from "react"
import ReactDOM from "react-dom/client"
// import "./index.css";
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { list } from "postcss"

const root = ReactDOM.createRoot(document.getElementById("root"))

const ParentComponent = () => {
  const members = [
    {
      id: 1,
      name: "伊藤",
    },
    {
      id: 2,
      name: "佐藤",
    },
    {
      id: 3,
      name: "高橋",
    },
  ]
  return (
    <>
      親です。
      <ChildComponent members={members} /> <br />
      コンポーネントを複数表示
      <br />
      {members.map(member => (
        // <MemberList key={member.id} name={member.name} />
        <MemberList name={member.name} />
      ))}
    </>
  )
}

const MemberList = props => {
  return (
    <>
      <div>{props.name}</div>
    </>
  )
}

const ChildComponent = props => {
  console.log("props", props.members[0])
  return (
    <>
      こどもは{props.members[0].name}です
      <ul>
        {props.members.map(member => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </>
  )
}

root.render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>
)
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
