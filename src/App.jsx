import './App.css'
import { Routes, Route } from 'react-router-dom';
import ToDoList from './components/ToDoList';
import Inprogress from './components/Inprogress';
import Completed from './components/Completed';
import { useEffect, useState } from 'react';
import AllTasks from './components/AllTasks';

function App() {
  const [tasks, setTask] = useState(()=>{
    const todo = localStorage.getItem("inprogresstasks");
    return todo?JSON.parse(todo): [];
  });
  const [done, setDone] = useState(()=>{
    const todo = localStorage.getItem("donetasks");
    return todo?JSON.parse(todo): [];});

  useEffect(() => (
    localStorage.setItem("inprogresstasks", JSON.stringify(tasks))
  ), [tasks])

  useEffect(() => (
    localStorage.setItem("donetasks", JSON.stringify(done))
  ), [done])


  return (
    <Routes>
      <Route path="/" element={<ToDoList />}>
        <Route index element={<AllTasks tasks={tasks} done={done} setTask={setTask} setDone={setDone} />} />
        <Route path="inprogress" element={<Inprogress tasks={tasks} setTask={setTask} setDone={setDone} />} />
        <Route path="completed" element={<Completed done={done} setDone={setDone} setTask={setTask} />} />
      </Route>
    </Routes>
  )
}

export default App;
