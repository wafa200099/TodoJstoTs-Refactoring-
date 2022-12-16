
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


