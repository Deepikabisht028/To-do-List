import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/TodoSlice';

function Todo({todo}) {
    const dispatch=useDispatch();

    const handleCheck = () => {
       dispatch(updateTodo(todo.id));
    };

    const handleDelete = () => {
        dispatch(removeTodo(todo.id));
    }

    return (<li id="tasklist" className={todo.checked ? 'cut' : 'normal'}>
        <input type="checkbox" id="check" checked={todo.checked} onChange={handleCheck} />
        <p>{todo.task}</p>
        <button onClick={handleDelete}>Delete</button>
    </li>
    )
}

export default Todo;