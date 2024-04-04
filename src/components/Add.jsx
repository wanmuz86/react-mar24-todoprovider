import React,{useState} from 'react'

const Add = () => {
    const [text,setText] = useState('');
    const addTodo = () => {

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