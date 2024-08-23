export default function App() {
  return (
    <>
      <TodoList />
    </>
  )
}

function TodoList() {
  return (
    <ul
      style={{
        backgroundColor: "black",
        color: "green",
      }}
    >
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  )
}
