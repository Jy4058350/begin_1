import { getImageUrl } from './utils.js'

export default function App() {
  return (
    <>
      {' '}
      <Avator person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} />
      <Avator
        person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
        size={50}
      />
      <Avator person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }} size={80} />
    </>
  )
}

function Avator({ person, size = 100 }) {
  return (
    <img
      className='avatar'
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}
