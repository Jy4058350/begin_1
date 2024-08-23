export default function App() {
  return (
    <>
      <ToDoList />
    </>
  )
}

const today = new Date()

function formatDate(date) {
  return new Intl.DateTimeFormat(
    "jp-JP",

    { weekday: "long" }
  ).format(date)
}

function ToDoList() {
  return <h2>To Do List for {formatDate(today)}</h2>
}
