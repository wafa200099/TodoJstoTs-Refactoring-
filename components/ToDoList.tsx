
import React,{FC} from "react";
import { ITask } from "../interface";
import ToDo from './ToDo'

interface Props {
  todos: ITask[],
  setTodos: React.Dispatch<React.SetStateAction<ITask[]>>,
}
const ToDoList: FC<Props> = ({todos, setTodos }) => {

  return (
    <div className="todos">
   

      {todos.map((task) => (
      <ToDo  task={task} todos={todos} setTodos={setTodos} key={task.id}/>
        
      ))}
    </div>
  );
};

export default ToDoList;





// import { type } from '@testing-library/user-event/dist/type'
// import React,{useState,FC} from 'react'
// import { ITask } from '../interface'
// import ToDo from './ToDo'
// import ToDoForm from './ToDoForm'



// const ToDoList :FC=()=> {
//   const [task, setTask] = useState<string>("")
//   const [todos, setTodos] = useState<ITask[]>([])


// const addToDo=(todo)=>{
//     if(!todo.text || /^\s*$/.test(todo.text)){
//         return // check for empty spaces. by  js regexp dont add any thing
//     }
//     const newToDos=[todo,...todos]
//      setTodos(newToDos)
// }
// const updateTodo = (todoId, newValue) => {
//     if (!newValue.text || /^\s*$/.test(newValue.text)) {
//       return;
//     }

//     setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
//   };

// const removeTodo=(id)=>{
//     const afterRemove=todos.filter((todo)=>todo.id!==id)
//     setTodos(afterRemove)
    
//     }

//     const completeTodo = id => {
//         let updatedTodos = todos.map(todo => {
//           if (todo.id === id) {
//             todo.isDone = !todo.isDone;
//           }
//           return todo;
//         });
//         setTodos(updatedTodos);
//       };
//   return (
//     <div>
//    <ToDoForm task={task} setTask={setTask} todos={todos} setTodos={setTodos}/>
//    <ToDo  task={task} todos={todos} setTodos={setTodos} key={task.id}/>
//     </div>
//   )
// }

// export default ToDoList