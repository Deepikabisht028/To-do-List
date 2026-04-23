import React from 'react';
import Task from './Task';

function Completed({done,setDone,setTask}) {
    const onDelete = (value) => {
        setDone(done.filter((task) => task.name !== value))
    }

    //Logic for moving into inprogress task list
    const isDone = (value) => {
        setTask((prevtasks) => [...prevtasks, value]);
        setDone(done.filter((task) =>  task.name !== value.name))
    }

    return (
        <div>
            
            {done.length > 0 ? done.map((task) => 
                (<Task key={task.id} task={task} onDelete={onDelete} isDone={isDone} />))
            : (<p>Currently no completed task</p>) }
        </div>
    );
}

export default Completed;