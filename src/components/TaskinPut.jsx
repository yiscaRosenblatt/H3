import React, { useRef } from 'react'

export default function TaskinPut({ addTask }) {
    const nameRef = useRef();
    const dateRef = useRef();


const onSub = (e) => {
    // מונע את הברירת מחדל של שיגור טופס
    e.preventDefault();
    console.log(nameRef.current.value);
    const Task = {
      name: nameRef.current.value,
      date: dateRef.current.value,

      // Date.now -> מחזיר בזמן יוניקס את התאריך
      // כמה מילי שניות עברו מה 1.1.1970
      id: Date.now()
    }
    addTask(Task);
  }

  return (
    <div>
      <h2>add task:</h2>
      <form onSubmit={onSub} className='col-lg-5'>
        <label>name:</label>
        <input ref={nameRef} className='form-control' type="text" />
        <label>date:</label>
        <input ref={dateRef} className='form-control' type="date" required />    
        <button className='btn btn-success mt-2'>Add</button>
      </form>
    </div>
  )
}
