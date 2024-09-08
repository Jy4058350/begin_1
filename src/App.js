import { useState } from 'react'

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  })

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section>
      <label htmlFor=''>
        First name:
        <input
          type='text'
          name='firstName'
          value={person.firstName}
          onChange={e => handleChange(e)}
        />
      </label>
      <label htmlFor=''>
        Last name:
        <input
          type='text'
          name='lastName'
          value={person.lastName}
          onChange={e => handleChange(e)}
        />
      </label>
      <label htmlFor=''>
        Email;
        <input
          type='mail'
          name='email'
          value={person.email}
          onChange={e => handleChange(e)}
        />
      </label>

      <div>
        {person.firstName} {person.lastName} ({person.email})
        {/* {person.firstName} */}
      </div>
    </section>
  )
}
