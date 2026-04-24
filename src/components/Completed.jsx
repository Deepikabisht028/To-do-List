import React, { useContext } from 'react';
import Task from './Task';
import { TodoContext } from '../context/Context';

function Completed() {

    const { tasks, setTask } = useContext(TodoContext);

    const onDelete = (value) => {
        setTask(tasks.filter((task) => task.name !== value))
    }

    const completed = tasks.filter((task) => task.checked);
    return (
        <div>
            {completed.length > 0 ? completed.map((task) =>
                (<Task key={task.id} task={task} onDelete={onDelete} />)
            )
            : (<p>Currently no completed task</p>)}
        </div>
    );
}

export default Completed;