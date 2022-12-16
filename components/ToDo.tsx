
import React,{useState ,useRef, useEffect,FormEvent,FC} from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { ITask } from "../interface";
import Modal from './Modal';

type Props = {
    key:number
    task:ITask,
    todos: ITask[],
    setTodos: React.Dispatch<React.SetStateAction<ITask[]>>,
  }
const Todo: FC<Props>= ({ task,todos, setTodos,  key}) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(task.taskName);
    const inputRef = useRef<HTMLInputElement>(null)
    const [showModal, setShowModal] = useState(false);
    const toggleShowModal = () => {
        setShowModal(!showModal);
      };
    

    useEffect(()=>{
        inputRef.current?.focus()
    },[edit])

    
   const handleDone =(id:number)=>{
    setTodos(todos.map((task) => 
    task.id === id ? { ...task, isDone: !task.isDone } : task))
   }
   
   const handleDelete =(id:number)=>{
    setTodos(todos.filter((task) =>  task.id !== id))
   }

   const handleEdit = (e: FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((task) => (task.id === id ? { ...task, taskName: editTask } : task))
    );
    setEdit(false);
  };

  return (

    <form  className="todo-row"   onSubmit={(e) => handleEdit(e, task.id)}>
         {edit ? (
            <input
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
              ref={inputRef}
            />
          ) : 
            task.isDone?(
                <s>{task.taskName}</s>
            ):(
                <span>{task.taskName}</span>
            )
        }
    
        <div>
          <div>
           <span className="icons" onClick={() => handleDone(task.id)}>
            <MdDone style={{color:"white"}}/>
           </span>
           <span className="icons"  onClick={() => {
                if (!edit && !task.isDone) {
                  setEdit(!edit);//true
                }
              }}>
            <AiFillEdit style={{color:"white"}}/>
           </span>
           <span className="icons"    onClick={toggleShowModal}>
            <AiFillDelete  style={{color:"white"}}/>
           </span>
           </div>

  <div>
  {showModal ? (
          <Modal>
            <h3>Are you sure Delete this Task ?</h3>
            <div className="modal-buttons">
              <button className="cancle-button" onClick={toggleShowModal}>
                CANCEL
              </button>
              <button className="delete-button"  onClick={() => handleDelete(task.id)}>
                DELETE
              </button>
            </div>
          </Modal>
        ) : null}
       </div>
       </div>

      
    </form>
 
  )
}

export default Todo