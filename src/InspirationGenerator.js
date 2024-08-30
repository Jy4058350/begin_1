import * as React from 'react'
import quotes from './quotes'
import inspirations from './inspirations'
import FancyText from './FancyText'

export default function InspirationGenerator({ children }) {
  const [index, setIndex] = React.useState(0)
  const inspiration = inspirations[index]
  const next = () => setIndex((index + 1) % quotes.length)

  return (
    <>
      <p>Your inspirational {inspiration.type} is:</p>
      <FancyText text={quote} />
      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  )
}
