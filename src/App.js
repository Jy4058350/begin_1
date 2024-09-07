import { useState } from 'react'

export default function Form() {
  const [firstName, setFirstName] = useState('Barbara')
  const [lastName, setLastName] = useState('Hepworth')
  const [email, setEmail] = useState('bhepworth@sculpture.com')

  function handleChange(e) {
    const nextFirstName = e.target.value
    setFirstName(nextFirstName)
  }
  function handleChange1(e) {
    const nextLastName = e.target.value
    setLastName(nextLastName)
  }
  function handleChange2(e) {
    const nextEmail = e.target.value
    setEmail(nextEmail)
  }

  return (
    <section>
      <label htmlFor=''>
        First name:
        <input type='text' value={firstName} onChange={e => handleChange(e)} />
      </label>
      <label htmlFor=''>
        Last name:
        <input type='text' value={lastName} onChange={e => handleChange1(e)} />
      </label>
      <label htmlFor=''>
        Email;
        <input type='mail' value={email} onChange={e => handleChange2(e)} />
      </label>

      <div>
        {firstName} {lastName} ({email})
      </div>
    </section>
  )
}
