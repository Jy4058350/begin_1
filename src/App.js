import { getImageUrl } from "./utils.js"

export default function App() {
  return (
    <>
      <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={100} />
    </>
  )
}

function Avatar({ person, size }) {
  return (
    <>
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    </>
  )
}
