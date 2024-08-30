export default function inspirations({ index }) {
  const isEven = num => num % 2 === 0
  let inspiration

  if (isEven(index)) {
    return (inspiration.type = 'quote')
  } else {
    return (inspiration.type = 'color')
  }
}
