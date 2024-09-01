// ヒント　２種類のボタンをつくる。
// 例えば動画再生用とアップロード用のボタンをコンポーネント化する

export default function Toolbar() {
  return (
    <div>
      <Button onClick={PlayClick}>Playing Kiki's Delivery Service</Button>
      <Button onClick={UploadClick}>Upload Image</Button>
    </div>
  )
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>
}

const PlayClick = () => {
  return alert('Playing Kikis Delivery Service!')
}

const UploadClick = () => {
  return alert('Uploading!')
}
