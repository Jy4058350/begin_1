import { getImageUrl } from './utils.js'

export default function App() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        size={70}
        person={{ name: 'Maria Skłodowska-Curie', imageId: 'szV5sdG' }}
        job='physicist and chemist'
        award={4}
        awardDescription='Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal'
        discoveredDescription='polonium (chemical element)'
      />
      <Profile
        size={70}
        person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
        job={'geochemist'}
        award={2}
        awardDescription={'Miyake Prize for geochemistry, Tanaka Prize'}
        discoveredDescription={
          'a method for measuring carbon dioxide in seawater'
        }
      />
    </div>
  )
}

function Profile({
  size,
  person,
  job,
  award,
  awardDescription,
  discoveredDescription,
}) {
  return (
    <section className='profile'>
      <h2>
        {person.name}
        <img
          className='avatar'
          src={getImageUrl(person.imageId)}
          alt={person.name}
          width={size}
          height={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {job}
          </li>
          <li>
            <b>Awards:{award}</b>
            {awardDescription}
          </li>
          <li>
            <b>Discovered: </b>
            {discoveredDescription}
          </li>
        </ul>
      </h2>
    </section>
  )
}
