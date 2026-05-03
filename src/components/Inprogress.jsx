import React, { useContext } from "react";
import './List.css';
import Task from "./Task.jsx";
import { TodoContext } from "../context/Context.jsx";

function Inprogress() {

    const { tasks}= useContext(TodoContext);
    
    const inprogress = tasks.filter((task) => !task.checked);
    return (
        <>
            <ul>
                {inprogress.length >0 ? inprogress.map((task) =>
                    (<Task key={task.id} task={task} />)
                ):
                    (<p>You don't have any task yet</p>)
                }
            </ul>
        </>
    );
}

export default Inprogress;