import React , {useRef}  from 'react';
import './List.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../features/TodoSlice';
import Todo from './Todo';

function AllTodo() {
    const textRef = useRef();
    const dispatch = useDispatch();
    const tasks=useSelector(state=>state.todos);


    const handleArray = (e) => {
        e.preventDefault();
        dispatch(addTodo(textRef.current.value))
        textRef.current.value="";
    }


    return (
        <>
            <form className="newTask" onSubmit={handleArray}>
                <input type="text" id="newTask" ref={textRef} />
                <button type="submit" >Add</button>
            </form>
            {tasks && tasks.map((task) => (
                <Todo key={task.id} todo={task} />
            ))}
        </>
    );
}

export default AllTodo;