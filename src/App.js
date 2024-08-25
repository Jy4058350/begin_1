export default function App() {
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
    {
      id: 2,
      product: 'Photo of Tam',
      isPacked: false,
    },
  ]

  return (
    <>
      <ul>
        {Items.map(item => (
          <li key={item.id}>
            {/* {item.isPacked ? `${item.product}'✔︎'` : `${item.product}`} */}
            {item.isPacked ? null : `${item.product}`}
          </li>
        ))}
      </ul>
    </>
  )
}
