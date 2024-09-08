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

  function handleChange(e) {
    setPerson({
      name: e.target.value,
      artWork: {
        title: person.artWork.title,
        city: person.artWork.city,
        image: person.artWork.image,
      },
    })
  }
  function handleChange1(e) {
    const nextArtWork = { ...person.artWork, title: e.target.value }
    const nextPerson = {
      ...person,
      artWork: nextArtWork,
    }
    setPerson(nextPerson)
  }
  return (
    <section>
      <label htmlFor=''>
        Name:
        <input
          type='text'
          value={person.name}
          onChange={e => handleChange(e)}
        />
      </label>
      <label htmlFor=''>
        Title:
        <input
          type='text'
          value={person.artWork.title}
          onChange={e => handleChange1(e)}
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
      <div>
        {person.name}
        <br></br>
        {person.artWork.title}
        <br></br>
        {person.artWork.city}
        <br></br>
        {person.artWork.image}
      </div>
    </section>
  )
}
