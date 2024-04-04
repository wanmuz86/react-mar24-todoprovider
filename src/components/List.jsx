import React from 'react'
import Row from './Row';

const List = () => {
  return (
    <div>
        <h2>To do List</h2>
        <ul>
            <li><Row/></li>
            <li><Row/></li>
            <li><Row/></li>
        </ul>
    </div>
  )
}

export default List