import React, { useState, useEffect } from 'react'

function DataFetchingComponent() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch('https://api.example.com/data')
        await new Promise(resolve => setTimeout(resolve, 2000))
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        )
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, []) // 空の依存関係配列で、コンポーネントのマウント時に一度だけ実行

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Fetched Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default DataFetchingComponent
