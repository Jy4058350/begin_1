export default function App() {
  return (
    <>
      <h2>Sally Ride's Packing List</h2>
      <PackingList />
    </>
  )
}

function PackingList() {
  const Items = [
    {
      id: 0,
      product: 'Space suit',
      isPacked: true,
    },
    {
      id: 1,
      product: 'Helmet with a golden leaf',
      isPacked: true,
    },
    { id: 2, product: 'Photo of Tam', isPacked: true },
  ]

  return (
    <>
      <ul>
        {Items.map(item => (
          <li key={item.id}>{item.product}</li>
        ))}
      </ul>
    </>
  )
}
