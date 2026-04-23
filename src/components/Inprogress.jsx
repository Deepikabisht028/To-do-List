import React from "react";
import './List.css';
import Task from "./Task.jsx";

function Inprogress({ tasks, setTask, setDone }) {

    //Logic for moving into completed task list
    const isDone = (value) => {
        setDone((prevtasks) => [...prevtasks, value]);
        setTask(tasks.filter((task) => task.name !== value.name))
    }

    const onDelete = (value) => {
        setTask(tasks.filter((task) => task.name !== value))
    }

    return (
        <>
            <ul>
                {tasks.length >0? tasks.map((task) =>
                    (<Task key={task.id} task={task} onDelete={onDelete} isDone={isDone} />)):
                    (<p>You don't have any task yet</p>)
                }
            </ul>
        </>
    );
}

export default Inprogress;