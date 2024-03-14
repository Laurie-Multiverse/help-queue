import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const title = "Deloitte Bootcamp";
  const activity = "talk to a coach";
  const place = "nth";

  return (
    <>
      <h1>{title} Help Queue</h1>
      <div width="50%" className="status">
        You are {place} in line to {activity}.
        <button>exit queue</button>
      </div>
      <div className="note">
        <input name="note" placeholder="[Optional] Brief note" width="50%"/>
      </div>
      <button>join the queue</button>
    </>
  )
}

export default App
