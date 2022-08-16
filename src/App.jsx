import './App.css';
import taskData from './list.json';
import TaskCard from './components/TaskCard';
import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import NewTask from './components/NewTask';


function App() {

  const [tasks, setTask] = useState (taskData);
  const [showForm, setShowForm] = useState(false);

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

  const handleNewTask = (task) => {
    const updateTask = [...tasks];
    updateTask.push(task);
    setTask(updateTask);
  }

  const handleSortByUrgency = () => {
    const ordered = [...tasks].sort((a, b) => b.urgency - a.urgency);
    setTask(ordered);
  }


  return (
    <div className="App">
      <div className='main-bar'>
       <div>
        {showForm && <NewTask newTask={handleNewTask} />} 
       <button className="card-btn outlined" onClick={() => setShowForm(prev => !prev)}>{!showForm ? "Create new task" : "Hide form"}</button>
       </div>
        <div className='search-bar'>
        <label>Find:  </label><SearchBar onSearch = {handleSearch} /></div>
        <button className="sort-btn" onClick={handleSortByUrgency}>Sort by Urgency</button>
      </div>
      
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