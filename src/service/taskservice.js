import { api } from "./api.js";

export const getTask=()=>{
    return api.get('tasks/getTask');

}

export const addTask=(task)=>{
    return api.post('tasks/addTask',task);
}

export const updateTask=(id,task)=>{
    return api.put(`tasks/update/${id}`,task);
}

export const deleteTask=(id)=>{
    return api.delete(`tasks/delete/${id}`);
}