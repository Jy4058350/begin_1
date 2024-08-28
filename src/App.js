const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.',
  ],
}

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <Fragment key={poem.index}>
          <p key={index}>{line}</p>
          <hr />
        </Fragment>
      ))}
    </article>
  )
}

function Fragment({ line, index }) {
  return <></>
}
