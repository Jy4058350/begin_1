export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName='Kikis Deleveryy Service'>
        Play "Kiki's Delivery Service"
      </PlayButton>
      <UploadButton>Upload Image</UploadButton>
    </div>
  )
}

function PlayButton({ movieName, children }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}`)
  }
  return (
    <>
      <Button onClick={handlePlayClick} children={children} />
    </>
  )
}

function UploadButton({ children }) {
  function handlePlayClick() {
    alert('Uploading')
  }
  return (
    <>
      <Button onClick={handlePlayClick} children={children} />
    </>
  )
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>
}
