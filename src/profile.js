import Panel from './Panel.js'
import { getImageUrl } from './utils.js'

let currentPerson

export default function Profile({ person }) {
  // console.log(person.imageId)
  return (
    <Panel>
      <Header name={person.name} />
      <Avatar id={person} name={person.name} />
    </Panel>
  )
}

function Header({ name }) {
  return <h1>{name}</h1>
}

function Avatar({ id, name }) {
  console.log(id)
  return (
    <img
      className='avatar'
      src={getImageUrl(id)}
      alt={name}
      width={50}
      height={50}
    />
  )
}
