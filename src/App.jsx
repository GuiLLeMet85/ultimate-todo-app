import './App.css';
import taskData from './list.json';
import TaskCard from './components/TaskCard';
import React, {useState} from 'react';
import SearchBar from './components/SearchBar';


function App() {

  const [tasks, setTask] = useState (taskData);

  const handleDelete = (taskName) => {
    const taskToRemove = tasks.filter (elem => {
      return elem.name !== (taskName)
    })
    setTask(taskToRemove)
  }


  const handleSearch = (searchValue) => {
    if (searchValue === '') {
      setTask(taskData)
    }
    else {
      const filtered = tasks.filter(elem => elem.name.toLocaleLowerCase().includes((searchValue).toLocaleLowerCase()))
      setTask(filtered)
    }
  }


  return (
    <div className="App">

     <SearchBar onSearch = {handleSearch} />

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
