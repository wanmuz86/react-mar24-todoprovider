import React,{useState} from 'react'
import {useTodo} from '../context/TodoContext';



const Add = () => {
    const {dispatch} = useTodo();
    const [text,setText] = useState('');
    const addTodo = () => {
        dispatch(
            {
               type:'ADD_TODO',
               payload: {id:Date.now(), text:text} 
            })

    }
    return (
        <div>
            <h2>Add new To Do Item</h2>
            <p>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
                <button onClick={addTodo}>Add new To Do</button>
            </p>
        </div>
    )
}

export default Add