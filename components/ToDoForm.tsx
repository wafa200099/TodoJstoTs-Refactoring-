import React,{useRef,FC,FormEvent} from 'react'
import { ITask } from '../interface'

interface Props{
    task:string,
    setTask: React.Dispatch<React.SetStateAction<string>>
    todos:ITask []
    setTodos: React.Dispatch<React.SetStateAction<ITask[]>>
}
const ToDoForm:FC<Props>=({task,setTask,todos,setTodos}) =>{
 const inputRef = useRef<HTMLInputElement>(null)

 const handleAdd=(e:FormEvent)=>{
  e.preventDefault()
  if(task){
    let newTask={id:Date.now(),taskName:task,isDone:false}
    setTodos([...todos,newTask])
    setTask("")
  }
}
  return(
    <form  className="todo-form" onSubmit={(e)=>{
    handleAdd(e)
    inputRef.current?.blur()
    }
    }>
    <input ref={inputRef} type="input" placeholder='Enter a Task' className='todo-input' value={task} onChange={(e)=>setTask(e.target.value)}/> 
    <button type='submit' className='todo-button'>Add ToDo</button>
  </form>
  ) 

}

export default ToDoForm