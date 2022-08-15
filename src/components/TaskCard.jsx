import React from "react"; 


export default function TaskCard (props) {

    const {info: {name, image, useful_link, urgency, description, done }, onDelete} = props


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
                                <p>Task done? {done ? " ✅  " : " ❌ " }</p>
                        </div>
                        <div className="btn-card">
                                <button className="useful-bt" src={useful_link}>More info</button>
                                <button onClick={() => onDelete(name)} className="delete-bt"> Delete </button>
                        </div>
                    </div>
            </div>    
            

    )
    
 }