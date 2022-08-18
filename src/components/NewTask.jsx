import React, {useState} from "react"; 

export default function NewTask (props) {

    const {newTask} = props;
    const [task, setTask] = useState ({
        name: '',
        image: '',
        useful_link: '',
        urgency: '',
        description: '',
        done: false,

    })

    const handleChange = (e) => {
        const conditionalValue = e.target.name === "urgency" ? parseInt(e.target.value) : e.target.value;
        setTask(prev => {
            return {
                ...prev,
                [e.target.name]: conditionalValue
            }
        })
    }

    const handleUrgency = (e) => {
        setTask(prev => {
            return {
                ...prev,
                urgency: parseInt(e.target.value)
            }
        })
    }

    const handleForm = (e) => {
        e.preventDefault();
        newTask(task);
        setTask({
            name: '',
            image: '',
            useful_link: '',
            urgency: '',
            description: '',
            done: ''
        })
    }

    return (
        <div className="add-form">
            <h3> Create a new task</h3>
            <form onSubmit={handleForm} className="add-task">
     
                <input type="text" placeholder="Name task" name="name" value={task.name} onChange={(e) => handleChange(e)}/>
                <input type="text" placeholder="Image URL" name="image" value={task.image} onChange={(e) => handleChange(e)}/>           
                <input type="text" placeholder="Useful URL" name="useful_link" value={task.useful_link} onChange={(e) => handleChange(e)}/>      
                <label>Urgency level</label>
                <input type="range"  min="0" max="9" name="urgency"  list="tickmarks" value={task.urgency} onChange={(e) => handleUrgency(e) (
                    <datalist id="tickmarks">
                        <option value="0" label="0%"></option>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                        <option value="5" label="50%"></option>
                        <option value="6"></option>
                        <option value="70"></option>
                        <option value="8"></option>
                        <option value="9"></option>
                        <option value="10" label="100%"></option>
                    </datalist>
                    )
                }/>
                <input type="textarea" placeholder="Description task" name="description" value={task.description} onChange={(e) => handleChange(e)} />
              
                <button type="submit">Add the new task</button>
            </form>
        </div>
    )
}