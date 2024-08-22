import "./styles.css"

function Profile() {
  return <img className="m-2 w-20" src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
}

export default function Gallery() {
  return (
    <section>
      <h1 className="m-2 font-bold text-2xl">Amazing scientists</h1>
      <div className="flex flex-row">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  )
}
