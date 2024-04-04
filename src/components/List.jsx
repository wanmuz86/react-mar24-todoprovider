import React from 'react'
import Row from './Row';
import { useTodo } from '../context/TodoContext';

const List = () => {
    const { state } = useTodo();
    return (
        <div>
            <h2>To do List</h2>
            <ul>
                {
                    state.todos.map(val => <li key={val.id}><Row todo={val} /></li>)
                }
            </ul>

        </div>
    )
}

export default List