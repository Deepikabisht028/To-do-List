import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

function CompTodo() {
   const tasks=useSelector(state=> state.todos);

    const completed = tasks.filter((task) => task.checked);
    return (
        <div>
            {completed.length > 0 ? completed.map((todo) =>
                (<Todo key={todo.id} todo={todo}/>)
            )
            : (<p>Currently no completed task</p>)}
        </div>
    );
}

export default CompTodo;