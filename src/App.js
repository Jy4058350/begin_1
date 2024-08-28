import { people } from './data.js'
import { getImageUrl } from './utils.js'

export default function List() {
  const chemists = people.filter(person => person.profession === 'chemist')
  const others = people.filter(person => person.profession !== 'chemist')
  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemist</h2>
      <ul>
        {chemists.map(person => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
      <h1>Scientists</h1>
      <h2>Other</h2>
      <ul>
        {others.map(person => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </article>
  )
}
