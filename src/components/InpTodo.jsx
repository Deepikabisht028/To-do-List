import React from 'react';
import './List.css';
import { useSelector } from 'react-redux';
import Todo from './Todo';

function InpTodo() {
    const tasks=useSelector(state=> state.todos);
    
    const inprogress = tasks.filter((task) => !task.checked);
    return (
        <>
            <ul>
                {inprogress.length >0 ? inprogress.map((todo) =>
                    (<Todo key={todo.id} todo={todo} />)
                ):
                    (<p>You don't have any task yet</p>)
                }
            </ul>
        </>
    );
}

export default InpTodo;