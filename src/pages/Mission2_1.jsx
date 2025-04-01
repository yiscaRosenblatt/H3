import React, { useLayoutEffect, useState } from 'react'
import TaskList from '../components/TaskList';
import TaskPut from '../components/TaskinPut';

export default function Mission2_1() {
  const [list,setList] = useState([]);

  useLayoutEffect(() => {
    checkLocal()
  },[])

  const checkLocal = () => {
    if(localStorage.getItem("Task")){
      setList(JSON.parse(localStorage.getItem("Task")))
    }
  }

  const addTask = (newTask) => {
    setList(prevList => {
      const updatedList = [...prevList, newTask];
      localStorage.setItem("Task", JSON.stringify(updatedList));
      return updatedList;
    });
  };
  

  return (
    <div className='container'>
      <TaskPut addTask={addTask}/>
      <TaskList list={list} />
    </div>
  )
}
