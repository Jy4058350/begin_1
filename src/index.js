import React from "react"
import { useState } from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"


const root = ReactDOM.createRoot(document.getElementById("root"))

const Scoreboard = () => {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  })

  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1,
    })
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    })
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    })
  }

  return (
    <>
      <div className="m-4">
        <label className="block m-4">
          Score: <b>{player.score}</b>{" "}
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={handlePlusClick}>
            +1
          </button>
        </label>
        <label className="block m-4">
          First name:
          <input className="border text-xs ml-4" value={player.firstName} onChange={handleFirstNameChange} />
        </label>
        <label className="block m-4">
          Last name:
          <input className="border text-xs ml-4" value={player.lastName} onChange={handleLastNameChange} />
        </label>
      </div>
    </>
  )
}

root.render(<Scoreboard />)
