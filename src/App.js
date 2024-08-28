export default function App() {
  return (
    <ul>
      <li>Creola Katherine Johnson: mathematician</li>
      <li>Mario José Molina-Pasquel Henríquez: chemist</li>
      <li>Mohammad Abdus Salam: physicist</li>
      <li>Percy Lavon Julian: chemist</li>
      <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
    </ul>
  )
}

const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist',
]

const listItems = people.map(person => <li>{person}</li>)
