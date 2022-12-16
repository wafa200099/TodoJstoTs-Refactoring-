
import './App.css';
import { FC ,useState} from 'react';
import ToDoList from './components/ToDoList';
import { ITask } from './interface';
import ToDoForm from './components/ToDoForm'


const  App:FC=()=> {


 
  const [todos, setTodos] = useState<ITask[]>([])
  const [task, setTask] = useState<string>("")
  

  return (
<div className="todo-app">
    <h1>TO-DO-APP </h1>
    <ToDoForm task={task} setTask={setTask} todos={todos} setTodos={setTodos}/>
    <ToDoList todos={todos} setTodos={setTodos}  />
    </div>
  );
}

export default App;
