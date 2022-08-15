import React, {useState} from "react"; 


export default function TaskCard (props) {

    const {info: {name, image, useful_link, urgency, description, done }, onDelete} = props
    const {newTask} = props;
    const [task, setTask] = useState ({

        done: false,

    })


    const handleCheck = (e) => {
        setTask(prev => {
            return {
                ...prev,
                hasDone: e.target.checked
            }
        })
    }


    const handleForm = (e) => {
        e.preventDefault();
        newTask(task);
        setTask({
            done: ''
        })
    }


    return (
             <div className="task">
                   
                    <div className="card">
                        <div className="title-card">
                            <h2>{name}</h2>
                        </div>
                       
                        <div className="picture-card">
                                <img src={image} alt={name} />
                        </div>
                        <div className="info-card">
                                <h3>Description:</h3>
                                <p>{description} </p>

                        </div>
                        <div className="states-card">
                                 <p><span className="title-desc">Urgency: </span> {urgency > 8 ? "Max Priority 🔴 " : "Not urgent 🟢 "} </p>
                                <p>Status? {done ? " ✅  " : " ❌ " }</p>
                               
                        <form onSubmit={handleForm} className="add-task">
                                 <label>Change?</label>
                                <input type="checkbox"checked={task.hasDone} name="done" value={task.done} onChange={(e) => handleCheck(e)} />
                                <button type="submit">Task done!</button>
                        </form>        
                        </div>
                        <div className="btn-card">
                                <a className="useful-bt" href={useful_link} >More info</a>
                                <button onClick={() => onDelete(name)} className="delete-bt"> Delete </button>
                        </div>
                    </div>
            </div>    
            

    )
    
 }