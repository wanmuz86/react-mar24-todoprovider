import { useState } from 'react'
import './App.css'
import Add from './components/Add';
import List from './components/List';
import {TodoProvider} from './context/TodoContext';
function App() {


  return (
    <>
      <TodoProvider>
        <Add />
        <List />
      </TodoProvider>
    </>
  )
}

export default App
