// ヒント　２種類のボタンをつくる。
// 例えば動画再生用とアップロード用のボタンをコンポーネント化する

// 次のステップ
// ボタンをつくるコンポーネントを検討する

export default function Toolbar() {
  return (
    <div>
      <PlayButton>Playing Kiki's Delivery Service</PlayButton>
      <UploadButton>Upload Image</UploadButton>
    </div>
  )
}

function PlayButton({ children }) {
  const PlayClick = () => {
    return alert('Playing Kikis Delivery Service!')
  }
  return <Button onClick={PlayClick} children={children} />
}
function UploadButton({ children }) {
  return (
    <Button
      onClick={() => {
        return alert('Uploading!')
      }}
      children={children}
    />
  )
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>
}
