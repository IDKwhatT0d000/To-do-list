import React from 'react'
import { useState } from 'react'
import Task from './Task';
const Todo = () => {
    const[task,setTask]=useState(" ");
    const[list,setList]=useState([]);
    const handleclick=(e)=>{
        setList(l=>[task,...l])
        setTask(" ")
        //console.log(task)
    }
    const handlechange=(e)=>{
        setTask(e.target.value)
    }
  return (
    <div className="flex flex-col items-center">
        <div className="flex items-center">
            <input className=" px-4 py-2 rounded-lg"  value={task} onChange={(e)=>handlechange(e)} type="text"></input>
            <button className="bg-black text-white px-4 py-2 rounded-lg"
            onClick={handleclick}>
                add
            </button>
        </div>
        <div className="flex  flex-col items-center">
            <Task list={list} setList={setList}></Task>
        </div>
    </div>
  )
}

export default Todo