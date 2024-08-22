import React from "react"
import { useState } from "react"
import { useImmer } from "use-immer"
import ReactDOM from "react-dom/client"
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

const initialProducts = [
  { id: 0, name: "Baklava", count: 1 },
  { id: 1, name: "Cheese", count: 5 },
  { id: 2, name: "Spaghetti", count: 2 },
]
const Cart = () => {
  const [products, setProducts] = useState(initialProducts)

  const handleIncreaseClick = productId => {
    setProducts(
      products.map(product => {
        if (product.id === productId) {
          return { ...product, count: product.count + 1 }
        } else {
          return product
        }
      })
    )
  }

  const handleDecreaseClick = (productId, productCount) => {
    if (productCount !== 1) {
      setProducts(
        products.map(product => {
          if (productId === product.id) {
            return { ...product, count: product.count - 1 }
          } else {
            return product
          }
        })
      )
    }
    if (productCount === 1) {
      setProducts(
        products.map(product => {
          if (productId === product.id) {
            return { ...product, id: null }
          }
        })
      )
    }
  }

  return (
    <ul className="m-4">
      {products.map(product => (
        <li key={product.id} className="mb-2">
          {product.name}
          <span className="ml-2">(</span>
          <span key={product.id} className="font-bold">
            {product.count}
          </span>
          <span>)</span>
          <button onClick={() => handleIncreaseClick(product.id)} className="bg-gray-300 text-gray-700 rounded-sm font-xs px-2 border border-gray-400 ml-4">
            +
          </button>
          <button
            onClick={() => handleDecreaseClick(product.id, product.count)}
            className="bg-gray-300 text-gray-700 rounded-sm font-xs px-2 border border-gray-400 ml-2"
          >
            -
          </button>
        </li>
      ))}
    </ul>
  )
}

root.render(<Cart />)
