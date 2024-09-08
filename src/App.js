import { useState } from 'react'

export default function Scoreborad() {
  const [person, setPerson] = useState({
    firstName: 'Ranjani',
    lastName: 'Sheltar',
    score: 10,
  })

  function handleClick() {
    setPerson({
      ...person,
      score: person.score + 1,
    })
  }
  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <section>
      Score: {person.score} <button onClick={handleClick}>+1</button>
      <label htmlFor='fistName'>
        First name:
        <input
          type='text'
          name='firstName'
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='lastName'>
        Last name
        <input
          type='text'
          name='lastName'
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <div>
        {person.firstName}
        <br></br>
        {person.lastName}
      </div>
    </section>
  )
}
