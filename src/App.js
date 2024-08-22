import "./styles.css"

function Profile() {
  return <img className="m-4" src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}
