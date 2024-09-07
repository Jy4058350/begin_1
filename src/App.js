import { useState } from 'react'

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  })

  function handleChange(e) {
    setPerson({
      firstName: e.target.value,
      lastName: person.lastName,
      email: person.email,
    })
  }
  function handleChange1(e) {
    setPerson({
      firstName: person.firstName,
      lastName: e.target.value,
      email: person.email,
    })
  }
  function handleChange2(e) {
    setPerson({
      firstName: person.firstName,
      lastName: person.lastName,
      email: e.target.value,
    })
  }

  return (
    <section>
      <label htmlFor=''>
        First name:
        <input
          type='text'
          value={person.firstName}
          onChange={e => handleChange(e)}
        />
      </label>
      <label htmlFor=''>
        Last name:
        <input
          type='text'
          value={person.lastName}
          onChange={e => handleChange1(e)}
        />
      </label>
      <label htmlFor=''>
        Email;
        <input
          type='mail'
          value={person.email}
          onChange={e => handleChange2(e)}
        />
      </label>

      <div>
        {person.firstName} {person.lastName} ({person.email})
        {/* {person.firstName} */}
      </div>
    </section>
  )
}
