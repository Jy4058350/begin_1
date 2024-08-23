export default function App() {
  return (
    <>
      <TodoList />
    </>
  )
}

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
  imgUrl: "https://i.imgur.com/7vQD0fPs.jpg",
  description: "Gregorio Y. Zara",
}

function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img className="avatar" src={person.imgUrl} alt={person.description} />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  )
}
