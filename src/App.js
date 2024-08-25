import { getImageUrl } from './utils.js'

export default function App() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name='Maria Skłodowska-Curie'
        imageId='szV5sdG'
        job='physicist and chemist'
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal',
        ]}
        discoveredDescription='polonium (chemical element)'
      />
      <Profile
        name='Katsuko Saruhashi'
        imageId='YfeOqp2'
        job={'geochemist'}
        awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
        discoveredDescription={
          'a method for measuring carbon dioxide in seawater'
        }
      />
    </div>
  )
}

function Profile({
  name,
  imageId,
  job,
  awards,
  discoveredDescription,
  size = 70,
}) {
  return (
    <section className='profile'>
      <h2>
        {name}
        <img
          className='avatar'
          src={getImageUrl(imageId)}
          alt={name}
          width={size}
          height={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {job}
          </li>
          <li>
            <b>Awards:{awards.length}</b>
            {awards}
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
