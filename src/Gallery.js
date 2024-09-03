import { useState } from 'react'
import { sculptureList } from './data.js'

export default function Gallery() {
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(false)

  function handleClick() {
    setIndex(index + 1)
  }

  function handleShow() {
    setShow(!show)
  }

  let sculpture = sculptureList[index]

  return (
    <section>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleShow}>{show ? 'Hide' : 'Show'} detail</button>
      {show && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </section>
  )
}
