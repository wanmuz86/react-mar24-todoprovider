import { useState } from 'react'
import './App.css'
import Add from './components/Add';
import List from './components/List';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Add/>
      <List/>
    </>
  )
}

export default App
