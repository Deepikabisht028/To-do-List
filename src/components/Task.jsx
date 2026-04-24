import React, { useContext } from "react";
import { TodoContext } from "../context/Context";

function Task({ task, onDelete }) {
    const { setTask } = useContext(TodoContext);

    const handleCheck = () => {
        setTask((prevs) => (prevs.map((todo) =>
            todo.id === task.id ? { ...todo, checked: !todo.checked } : todo)));
    };

    const handleDelete = () => {
        onDelete(task.name);
    }

    return (<li id="tasklist" className={task.checked ? 'cut' : 'normal'}>
        <input type="checkbox" id="check" checked={task.checked} onChange={handleCheck} />
        <p>{task.name}</p>
        <button onClick={handleDelete}>Delete</button>
    </li>
    )
}

export default Task;