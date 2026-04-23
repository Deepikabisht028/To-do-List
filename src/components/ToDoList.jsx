import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function ToDoList() {
    return (
        <>
            <h1>Your To Do List</h1>
            <div className="container">
                <div className="task-list">
                    <nav>
                        <NavLink to="/">All</NavLink>
                        <NavLink to="/inprogress">Inprogress</NavLink>
                        <NavLink to="/completed">Completed</NavLink>
                    </nav>
                    <hr />
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default ToDoList;