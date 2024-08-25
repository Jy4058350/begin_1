import Avatar from './Avatar.js'

export default function App() {
  return (
    <>
      <Card>
        <Avatar
          person={{
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2',
          }}
        />
        <Avatar
          person={{
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2',
          }}
        />
        <Avatar
          person={{
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2',
          }}
        />
      </Card>
    </>
  )
}

function Card({ children }) {
  return <div className='card'>{children}</div>
}
