function Recipe({ drinkers }) {
  return (
    <ol className='ml-4 list-decimal'>
      <li className='  text-base font-normal'>
        Boil {drinkers} cups of water.
      </li>
      <li className=' text-base font-normal '>
        Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
      </li>
      <li className=' text-base font-normal'>
        Add {0.5 * drinkers} cups of milk to boil and sugar to taste.
      </li>
    </ol>
  )
}

export default function App() {
  return (
    <section className=' p-4'>
      <h1 className='mb-4 text-xl font-bold'>Spiced Chai Recipe</h1>
      <h2 className='mb-4 text-lg font-semibold'>For two</h2>
      <Recipe drinkers={2} />
      <h2 className='mb-4 mt-4 text-lg font-semibold'>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  )
}
