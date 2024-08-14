import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"

const app = ReactDOM.createRoot(document.getElementById("app"))

//テスト

const Carousel = () => {
  const carouselItems = [
    {
      id: 1,
      src: "images/image000.jpg",
    },
    {
      id: 2,
      src: "images/image002.jpg",
    },
    {
      id: 3,
      src: "images/image003.jpg",
    },
    {
      id: 4,
      src: "images/image004.jpg",
    },
    {
      id: 5,
      src: "images/image005.jpg",
    },
    {
      id: 6,
      src: "images/image006.jpg",
    },
  ]

  const [currentImage, setCurrentImage] = useState(1)
  const next = () => {
    if (currentImage < carouselItems.length) {
      setCurrentImage(currentImage + 1)
    }
  }
  const prev = () => {
    if (currentImage > 1) {
      setCurrentImage(currentImage - 1)
    }
  }
  return (
    <>
      <div className="carousel">
        <div className="carousel__main">{<ShowImage id={currentImage} carouselItems={carouselItems} />}</div>
        <div onClick={prev} className="carousel__prev">
          <i className="fas fa-angle-left fa-3x"></i>
        </div>
        <div onClick={next} className="carousel__next">
          <i className="fas fa-angle-right fa-3x"></i>
        </div>
      </div>
      <div className="carousel__thumbnails">{<Thumbnail id={currentImage} carouselItems={carouselItems} />}</div>
    </>
  )
}

const ShowImage = props => {
  console.log(props)
  return (
    <>
      {props.carouselItems.map(item => {
        return item.id === props.id ? <img key={item.id} src={item.src} alt="" /> : null
      })}
    </>
  )
}

const Thumbnail = props => {
  return (
    <>
      {props.carouselItems.map(item =>
        props.id === item.id ? (
          <li style={{ opacity: 1 }} key={item.id}>
            <img src={item.src} alt="" />
          </li>
        ) : (
          <li style={{ opacity: 0.4 }} key={item.id}>
            <img src={item.src} alt="" />
          </li>
        )
      )}
    </>
  )
}

app.render(<Carousel />)
