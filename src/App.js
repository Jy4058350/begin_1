export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert('Playing!')}
      onUploadImage={() => alert('Uploading!')}
    />
  )
}

function Toolbar({ Movie, Image }) {
  return (
    <div>
      <button onClick={Movie}>Play Movie</button>
      <button onClick={Image}>Upload Image</button>
    </div>
  )
}
