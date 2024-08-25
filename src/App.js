function Item({ name, isPacked }) {
  if (isPacked) {
    return null
  }
  return <li>{name}</li>
}

export default function App() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item name='Space suit' isPacked={true} />
        <Item name='Helmet with a golden leaf' isPacked={true} />
        <Item name='Photo of Tam' isPacked={false} />
      </ul>
    </section>
  )
}
