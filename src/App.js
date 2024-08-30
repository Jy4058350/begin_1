export default function Toolbar() {
  return (
    <div>
      <AlertButton message='Playing' button='Play Movie' />
      <AlertButton message='Uploading' button='Upload Image' />
    </div>
  )
}

function AlertButton({ message, button }) {
  return <button onClick={() => alert(`${message}`)}>{button}</button>
}
