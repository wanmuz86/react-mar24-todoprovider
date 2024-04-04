import React from 'react'
import {useTodo} from '../context/TodoContext';

const Row = ({todo}) => {
    
    const {id,text} = todo;
    
    const {dispatch} = useTodo();

    const deleteItem = () => {
        dispatch(
            {
                type:'REMOVE_TODO',
                payload:id
            }
        )
    }

  return (
    <div>
        <h3>{text}</h3>
        <button onClick={deleteItem}>Delete Item</button>
    </div>
  )
}

export default Row