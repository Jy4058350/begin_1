export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert('Playing!')}
      onUploadImage={() => alert('Uploading!')}
    />
  )
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button children='Play Movie' />
      <Button children='Upload Image' />
    </div>
  )
}

function Button({ children }) {
  return (
    <div>
      <button>{children}</button>
    </div>
  )
}
