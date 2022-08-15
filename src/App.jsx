import './App.css';
import taskData from './list.json';
import TaskCard from './components/TaskCard';
import React, {useState} from 'react';


function App() {

  const [tasks, setTask] = useState (taskData);

  const handleDelete = (taskName) => {
    const taskToRemove = tasks.filter (elem => {
      return elem.name !== (taskName)
    })
    setTask(taskToRemove)
  }

  return (
    <div className="App">

    <h2>Task List</h2>
    
    <div className="list-task">
     {tasks.map (elem =>{
      return  <TaskCard info = {elem} onDelete = {handleDelete} key={elem.name} />
     })}
    </div>
    </div>
  );
}

export default App;
