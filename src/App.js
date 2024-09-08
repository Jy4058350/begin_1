import { useState } from 'react'

import Background from './Background'
import Box from './Box'

const initialPosition = {
  x: 0,
  y: 0,
}

export default function Canvas() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition,
  })

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value,
    })
  }

  function handleMove(dx, dy) {
    shape.position.x += dx
    shape.position.y += dy
  }
  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value='orange'>orange</option>
        <option value='lightpink'>lightpink</option>
        <option value='aliceblue'>aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box position={shape.position} color={shape.color} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  )
}
