import React, { useState } from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))

const TabMenu = () => {
  const [active, setActive] = useState(1)

  const activate = id => {
    console.log(id)
    setActive(active => (active = id))
  }

  const items = [
    {
      id: 1,
      title: "Home",
      content: "This is Home",
    },
    {
      id: 2,
      title: "About",
      content: "This is About",
    },
    {
      id: 3,
      title: "Contact",
      content: "This is Contact",
    },
  ]
  const activeItem = items.find(item => item.id === active)

  return (
    <>
      <section className="tag">
        <ul className="tab__label">
          {items.map(item => (
            <li key={item.id}>
              <a className={item.id === active ? "active" : undefined} href="#001" onClick={() => activate(item.id)}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        {activeItem && <div className="tab__content">{activeItem.content}</div>}
      </section>
    </>
  )
}

root.render(<TabMenu />)
