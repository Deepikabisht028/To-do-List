import React, { useContext } from 'react';
import Task from './Task';
import { TodoContext } from '../context/Context';

function Completed() {

    const { tasks} = useContext(TodoContext);

    const completed = tasks.filter((task) => task.checked);
    return (
        <div>
            {completed.length > 0 ? completed.map((task) =>
                (<Task key={task.id} task={task}/>)
            )
            : (<p>Currently no completed task</p>)}
        </div>
    );
}

export default Completed;