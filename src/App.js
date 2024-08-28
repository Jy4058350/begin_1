import { people } from './data.js'
import { getImageUrl } from './utils.js'

export default function List() {
  const listItems = people.map(person => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ))
  const chemists = people.filter(person => person.profession === 'chemist')
  const chemistListItems = chemists.map(person => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ))
  const others = people.filter(person => person.profession !== 'chemist')
  const otherListItems = others.map(person => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ))
  return (
    <article>
      <h1>Chemist Scientists</h1>
      <ul>{chemistListItems}</ul>
      <h1>Other Scientists</h1>
      <ul>{otherListItems}</ul>
    </article>
  )
}
