import React, { useRef } from 'react';
import Task from './Task';

function AllTasks({ tasks, done, setTask, setDone }) {

    const textRef = useRef();

    const handleArray = (e) => {
        e.preventDefault();
        const value = textRef.current.value;

        //Logic for checking for duplicate task
        const sameValue = tasks.find((task) => task.name.toLowerCase() === value.toLowerCase());
        if (sameValue) textRef.current.value = "";

        //adding a unique id for key usage
        else if (value && !sameValue) {
            setTask((prevtasks) => [...prevtasks, { id: crypto.randomUUID(), name: value, checked: false }]);
            textRef.current.value = "";
        }
    }

    const onDelete = (value) => {
        value.checked ?
            setDone(done.filter((task) => task.name !== value)) :
            setTask(tasks.filter((task) => task.name !== value));
    }

    //Logic for switching into inprogress and completed task list
    const isDone = (value) => {
        if (!value.checked) {
            setTask((prevtasks) => [...prevtasks, value]);
            setDone(done.filter((task) => task.name !== value.name))
        }
        else {
            setDone((prevtasks) => [...prevtasks, value]);
            setTask(tasks.filter((task) => task.name !== value.name))
        }
    }

    return (
        <>
            <form className="newTask" onSubmit={handleArray}>
                <input type="text" id="newTask" ref={textRef} />
                <button type="submit" >Add</button>
            </form>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} isDone={isDone} />
            ))}
            {done.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} isDone={isDone} />
            ))}
        </>
    );
}

export default AllTasks;