import { useState } from 'react'

export default function Form() {
  const [person, setPerson] = useState({
    name: 'Yamabe Jun',
    artWork: {
      title: 'haiku',
      city: 'nagoya',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  })

  function handleChange() {}
  return (
    <section>
      <label htmlFor=''>
        Name:
        <input type='text' value={person.name} onChange={handleChange} />
      </label>
      <label htmlFor=''>
        Title:
        <input
          type='text'
          value={person.artWork.title}
          onChange={handleChange}
        />
      </label>
      <label htmlFor=''>
        City:
        <input
          type='text'
          value={person.artWork.city}
          onChange={handleChange}
        />
      </label>
      <label htmlFor=''>
        Image:
        <img alt='' src={person.artWork.image} />
      </label>
    </section>
  )
}
