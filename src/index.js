import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"

const app = ReactDOM.createRoot(document.getElementById("app"))

const ModalWindow = () => {
  const [isShow, setIsShow] = useState(true)
  const toggleShow = () => setIsShow(!isShow)
  console.log(isShow)

  return (
    <>
      <button onClick={toggleShow}>画像を表示</button>
      <div style={{ display: isShow ? "initial" : "none" }}>
        <div className="modal__inner">
          <img src="./image001.jpg" alt="画像" />
          <div onClick={() => setIsShow(!isShow)} className="modal__close">
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div onClick={() => setIsShow(!isShow)} className="modal__background"></div>
      </div>
    </>
  )
}

app.render(<ModalWindow />)
