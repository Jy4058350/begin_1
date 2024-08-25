import { getImageUrl } from './utils.js'

function Avatar({ person, size }) {
  const select = size > 90 ? 'b' : 's'
  return (
    <img
      className='avatar'
      src={getImageUrl(person, select)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

export default function App() {
  return (
    <>
      <Avatar
        size={100}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: '7vQD0fP',
        }}
      />
      <Avatar
        size={40}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: '7vQD0fP',
        }}
      />
    </>
  )
}
