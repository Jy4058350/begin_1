export default function App() {
  const chemists = people.filter(person => person.profession === 'chemist')
  const listItems = chemists.map(person => <li>{person}</li>)
  return <li>{listItems}</li>
}

const people = [
  {
    id: 0,
    name: 'Creola Katherine Johnson: mathematician',
    profession: 'mathmatician',
  },
  {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez: chemist',
    profession: 'chemist',
  },
  {
    id: 2,
    name: 'Mohammad Abdus Salam: physicist',
    profession: 'physicist',
  },
  {
    id: 3,
    name: 'Percy Lavon Julian: chemist',
    profession: 'chemist',
  },
  {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar: astrophysicist',
    profession: 'astrophysicist',
  },
]
