export default function App() {
  return (
    <>
      <Avatar person />
    </>
  )
}

const person = {
  url: "https://i.imgur.com/1bX5QH6.jpg",
  name: "Lin Lanying",
  width: "100",
  height: "100",
}

function Avatar(person) {
  console.log(person)
  const avatar = person.url
  const description = person.name
  const w = person.width
  const h = person.height
  return (
    <>
      <img src={avatar} alt={description} width={w} height={h} />
    </>
  )
}
