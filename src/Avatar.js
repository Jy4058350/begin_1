import { getImageUrl } from './utils.js'

export default function Avator({ person, size = 100 }) {
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
