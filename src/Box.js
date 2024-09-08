import { useState } from 'react'

export default function Box({ children, position, color }) {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: color,
        position: 'absolute',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `translate(
    ${position.x}px,
    ${position.y}px)`,
      }}
    >
      {children}
    </div>
  )
}
