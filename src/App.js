import React, { useState, useEffect } from 'react'

function ExampleComponent() {
  const [count, setCount] = useState(0)

  useEffect(
    () => {
      document.title = `You clicked ${count} times` //セットアップ関数
    },
    [count] //依存関係の配列
  )

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default ExampleComponent
