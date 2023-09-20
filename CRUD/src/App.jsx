import { useState } from 'react'
import Reg_form from './Reg_form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Reg_form />
    </>
  )
}

export default App
