import React, {useState} from "react"; 
import { Range } from 'react-range';

export default function NewTask ({newInfo}) {

    const [name, setName] =useState('')
    const [image, setImage] = useState('')
    const [useful_link, setUseful_link] = useState('')
    const [urgency, setUrgency] = useState('');
    const [description,setDescription] = useState('');
    const [done,setDone] = useState('');

    const handleForm = (e) => {
        e.preventDefault()
        const newDataTaskForm = 
        {
            name: name,
            image: image,
            useful_link: useful_link,
            urgency: parseInt(urgency),
            description: description,
            done: done
        }
        newInfo(newDataTaskForm)
    }

    return (
        <div className="add-form">
            <h3> Create a new task</h3>
            <form onSubmit={handleForm} className="add-task">
     
                <input type="text" placeholder="Name task" name="name" value={name} onChange={(e) => {setName(e.target.value) }} />
                <input type="text" placeholder="Image URL" name="image" value={image} onChange={(e) => {setImage(e.target.value) }} />           
                <input type="text" placeholder="Useful URL" name="useful_link" value={useful_link} onChange={(e) => setUseful_link((e.target.value) )} />      
                <label>Urgency level</label>
               {/* <Range step={1} maxValue={10} minValue={0} name="urgency" value={urgency} onChange={(e) => setUrgency((e.target.value) )} />   */}
                <input type="textarea" placeholder="Description task" name="description" value={description} onChange={(e) => {setDescription(e.target.value) }} />
              
                <button type="submit">Add the new task</button>
            </form>
        </div>
    )
}