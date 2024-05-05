import { useState } from 'react'
import './App.css'
//@ts-ignore
import ButtonApp from 'buttonApp/Button'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ButtonApp/>
      </div>
      
    </>
  )
}

export default App
