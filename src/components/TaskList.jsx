import React from 'react'

export default function TaskList({list}) {
    


  return (
    <div>
    <h2>List of tasks:</h2>
    <ul>
      {list.map(task => {
        return (
          <li className='border p-2 my-2 col-lg-5' key={task.id}>name: {task.name} date: {task.date}</li>
        )
      })}
    </ul>
  </div>
  )
}
