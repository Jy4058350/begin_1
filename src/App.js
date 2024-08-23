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
}

function TodoList() {
  return (
    <div style={person.theme}>
      <h2>{person.name}s Todos</h2>
      <img src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </div>
  )
}
