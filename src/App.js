import { useImmer } from 'use-immer'

export default function Form() {
  const [person, updatePerson] = useImmer({
    name: 'Yamabe Jun',
    artWork: {
      title: 'haiku',
      city: 'nagoya',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  })

  function handleChange(e) {
    updatePerson(draft => {
      draft.name = e.target.value
    })
  }
  function handleChange1(e) {
    const { name, value } = e.target
    updatePerson(draft => {
      draft.artWork[name] = value
    })
  }

  return (
    <section>
      <label htmlFor='name'>
        Name:
        <input type='text' value={person.name} onChange={handleChange} />
      </label>
      <label htmlFor='title'>
        Title:
        <input
          type='text'
          name='title'
          value={person.artWork.title}
          onChange={handleChange1}
        />
      </label>
      <label htmlFor='city'>
        City:
        <input
          type='text'
          name='city'
          value={person.artWork.city}
          onChange={handleChange1}
        />
      </label>
      <label htmlFor='image'>
        Image:
        <input
          type='text'
          name='image'
          value={person.artWork.image}
          onChange={handleChange1}
        />
      </label>
      <div>
        {person.name}
        <br></br>
        {person.artWork.title}
        <br></br>
        {person.artWork.city}
        <br></br>

        <img alt='' src={person.artWork.image} />
      </div>
    </section>
  )
}
