import React from "react";

function Task({ task, onDelete, isDone }) {
    
    const handleCheck = () => {
        isDone({name:task.name,id:task.id,checked: !task.checked});
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