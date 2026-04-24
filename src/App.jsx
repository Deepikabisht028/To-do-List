import './App.css'
import { Routes, Route } from 'react-router-dom';
import ToDoList from './components/ToDoList';
import Inprogress from './components/Inprogress';
import Completed from './components/Completed';
import AllTasks from './components/AllTasks';


function App() {
    return (
    <Routes>
      <Route path="/" element={<ToDoList />}>
        <Route index element={<AllTasks />} />
        <Route path="inprogress" element={<Inprogress />} />
        <Route path="completed" element={<Completed />} />
      </Route>
    </Routes>

  )
}

export default App;
