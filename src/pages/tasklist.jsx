import { useState,useEffect } from "react";
import { getTask,addTask,updateTask,deleteTask } from "../service/taskservice.js";
import { useAuth } from "../context/authcontext.jsx";
import { useError } from "../context/Errorcontext.jsx";
import TaskItem from "../components/taskitem.jsx";
import { toast } from "react-toastify";
import { TaskForm } from "../components/taskfrom.jsx";

export default function TaskList(){
    const [tasks,setTask]=useState([]);
    const {handleError,clearError}=useError();
    const {logout}=useAuth();
    const [etask,setEditTask] = useState(null);


async function loadTask(task){
    try{
   const taskdata=await getTask();
    if(taskdata.length!==0){
        setTask(taskdata);
    }
    clearError();
    }catch(err){
        handleError(err);
        clearError();
        logout();
    }  
}
useEffect(()=>{
loadTask();
},[])

function handleEdit(task){

    setEditTask({...task});

}

async function handleDelete (id) {

    try{
        await deleteTask(id)
        const newTask = tasks.filter((tasks)=> tasks._id!==id)
        setTask(newTask);
        toast.success("task deleted successfully");

    }catch(err){
        toast.error(err);
    }
    
}

async function handleCreate(task) {
    try{
        const newTask=await addTask(task);

        setTask(etask?[...tasks,newTask]:[newTask]);
        toast.success("Task created successfully");
    }catch(err){
           toast.error(err);
    }
    
}

 async function handleUpdateTask(task) {
        try {
            const updatedTask = await updateTask(etask._id, task);
            const newTasks = tasks.map(task => task._id === etask._id ? updatedTask: task );
            setTask(newTasks)
            setEditTask(null);
            toast.success("Task updated successfully");
        } catch (err) {
            toast.error(err);
        }
    }
    return(
        <>
        <div className="main div">
            <div className="sub div">
                <TaskForm AnaddTodo={etask? handleUpdateTask : handleCreate } etask={etask}/>
                <div className="sub1 div">
               {tasks.length !== 0 ? (
  tasks.map(task => (
    <TaskItem 
      key={task._id} 
      task={task}
      onEdit={handleEdit} 
      onDelete={()=>handleDelete(task._id)} 
    />
  ))
) : (
  <p className="text-gray-600">Task Not Found</p>
)}
                </div>   
            </div>
        </div>    
        </>
    )
}
