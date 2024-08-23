export default function App() {
  return (
    <>
      <Avatar />
    </>
  )
}

function Avatar() {
  const avator = "https://i.imgur.com/7vQD0fPs.jpg"
  const description = "Gregorio Y. Zara"
  return (
    <>
      <img className="avatar" src={avator} alt={description}></img>
    </>
  )
}
