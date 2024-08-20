import React from "react"
import { useState } from "react"
import { useImmer } from "use-immer"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

const shapeList = [
  { id: 0, type: "circle", x: 50, y: 100 },
  { id: 1, type: "squere", x: 150, y: 100 },
  { id: 2, type: "circle", x: 250, y: 100 },
]
const ShapeEditor = () => {
  const [shapes, setShapes] = useState(shapeList)
  const handleClick = () => {}
  return (
    <div>
      <button onClick={() => handleClick}>Move circles down!</button>
      {shapes.map(shape => (
        <div
          key={shape.id}
          style={{
            background: "purple",
            position: "absolute",
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === "circle" ? "50%" : "",
            width: 20,
            height: 20,
          }}
        ></div>
      ))}
    </div>
  )
}
root.render(<ShapeEditor />)
