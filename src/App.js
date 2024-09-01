// ヒント　２種類のボタンをつくる。
// Step1
// 例えば動画再生用とアップロード用のボタンをコンポーネント化する

// Step2
// ボタンをつくるコンポーネントを検討する

// Step3
// ボタンの名称もボタンごとに確定しているはず

// Step4
// 再生する動画タイトルは別変数で取る方針にしていく

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName='Kikis Delivery Service' />
      <UploadButton />
    </div>
  )
}

function PlayButton({ movieName }) {
  const PlayClick = () => {
    return alert(`Playing ${movieName}!`)
  }
  return <Button onClick={PlayClick}>Playing Kiki's Delivery Service</Button>
}

function UploadButton() {
  return (
    <Button
      onClick={() => {
        return alert('Uploading!')
      }}
    >
      UploadImage
    </Button>
  )
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>
}
