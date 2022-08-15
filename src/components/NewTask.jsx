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
        console.log(task)
    }

    const handleUrgency = (e) => {
        setTask(prev => {
            return {
                ...prev,
                urgency: parseInt(e.target.value)
            }
        })
    }

    // const handleCheck = (e) => {
    //     setTask(prev => {
    //         return {
    //             ...prev,
    //             hasDone: e.target.checked
    //         }
    //     })
    // }

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
                <label>Name</label>
                <input type="text" placeholder="Name task" name="name" value={task.name} onChange={(e) => handleChange(e)}/>
                <label>Image</label>
                <input type="text" placeholder="Image URL" name="image" value={task.image} onChange={(e) => handleChange(e)}/>
                <label>More information</label>
                <input type="text" placeholder="Useful URL" name="useful_link" value={task.useful_link} onChange={(e) => handleChange(e)}/>
                <label>Urgency</label>
                <input type="number" placeholder="Urgency level" name="urgency" value={task.urgency} onChange={(e) => handleUrgency(e)}/>
                <label>Description</label>
                <input type="text" placeholder="Description task" name="description" value={task.description} onChange={(e) => handleChange(e)}/>
               
                <button type="submit">Add the new task</button>
            </form>
        </div>
    )
}