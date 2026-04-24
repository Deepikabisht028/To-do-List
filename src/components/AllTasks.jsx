import React, { useContext, useRef } from 'react';
import Task from './Task';
import { TodoContext } from '../context/Context';

function AllTasks() {
    const { tasks, setTask}= useContext(TodoContext);
    const textRef = useRef();

    const handleArray = (e) => {
        e.preventDefault();
        const value = textRef.current.value;

        //Logic for checking for duplicate task
        const sameValue = tasks.find((task) => task.name.toLowerCase() === value.toLowerCase());
        if (sameValue) textRef.current.value = "";

        //adding a unique id for key usage
        else if (value) {
            setTask((prevtasks) => [...prevtasks, { id: crypto.randomUUID(), name: value, checked: false }]);
            textRef.current.value = "";
        }
    }

    const onDelete = (value) => {
            setTask(tasks.filter((task) => task.name !== value));
    }

    return (
        <>
            <form className="newTask" onSubmit={handleArray}>
                <input type="text" id="newTask" ref={textRef} />
                <button type="submit" >Add</button>
            </form>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} />
            ))}
        </>
    );
}

export default AllTasks;