import './App.css';
import taskData from './list.json';
import TaskCard from './components/TaskCard';
import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import NewTask from './components/NewTask';
import { FaPlus, FaWindowClose, FaSearch, FaSortAmountUp, FaTasks} from "react-icons/fa";
import tasksPicture from '../src/images/tasks.png'
import Footer from './components/Footer';




function App() {

  const [tasks, setTask] = useState (taskData);
  const [showForm, setShowForm] = useState(false);
  const [showSearch, setShowSearch] = useState (true);
  const [showList, setShowList] = useState (true);

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
        <navbar>
              <button className="menu-bts" onClick={() => setShowList(prev => !prev)}>{!showList ?  <FaTasks className='icon'/> : <FaWindowClose className='icon'/>}</button>
              <button className="menu-bts" onClick={() => setShowForm(prev => !prev)}>{!showForm ? <FaPlus className='icon'/> : <FaWindowClose className='icon'/>}</button>
              <button className="menu-bts" onClick={() => setShowSearch(prev => !prev)}>{!showSearch ?  <FaSearch className='icon'/> : <FaWindowClose className='icon'/>}</button>
        </navbar>


     <div className='sections'>
        <h1>Welcome to Task page</h1>
        <img src = {tasksPicture} alt="task logo" className='intro-pic'/>
        {
        showForm && <NewTask newTask={handleNewTask} />
        } 

        {
        showSearch &&  
              <div className='search-bar'>
                <SearchBar onSearch = {handleSearch} />
                <label><FaSearch className='icon'/>  </label>
              </div> 
        }

        {
        showList &&  
                <div className='tasks'>
                  <h2>Task List</h2>
                <button className="list-bts" onClick={handleSortByUrgency}><FaSortAmountUp className='icon'/></button>
                  <div className="list-task">
                      {tasks.map (tasks =>{
                        return  <TaskCard info = {tasks} onDelete = {handleDelete} key={tasks.name} />
                      })}
                  </div>
              </div>
        }
        </div>
        <Footer />
      </div>
  );
}

export default App;