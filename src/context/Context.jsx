import React, { createContext, useState,useEffect } from 'react';

const TodoContext= createContext();

const TodoProvider=({children})=>{
   const [tasks, setTask] = useState(()=>{
       const todo = localStorage.getItem("inprogresstasks");
       return todo?JSON.parse(todo): [];
     });

    useEffect(() => (
        localStorage.setItem("inprogresstasks", JSON.stringify(tasks))
      ), [tasks])

    return <TodoContext.Provider value={{tasks,setTask}}>
     {children}
    </TodoContext.Provider>

}

export {TodoContext, TodoProvider};