import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Lottery from './Lottery'
import './App.css'
import { sum } from './genticket'
function App() {
  const [count, setCount] = useState(0)
  let wincondition = (ticket) => {
    return sum(ticket) === 15;
  }
  return (
    <>
      <Lottery wincondition={wincondition}/>
    </>
  )
}

export default App
