import React, { useState } from 'react'
import Counter from './components/Counter'
import Paragraph from './components/Paragraph'
import Work from './components/Work'

const App = () => {
  const [counter, setCounter] = useState(0)
const inc =()=>{
  setCounter(counter+1)
}
const dec =()=>{
  setCounter(counter-1)
}
return (
    <div>
      <Counter counter={counter} inc={inc} dec={dec} />
      <Paragraph/>
      <Work/>
    </div>
  )
}

export default App
