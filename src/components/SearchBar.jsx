import React from "react"; 

export default function SearchBar (props) {

    const {onSearch} = props;

    return (
       
        <input type="text" placeholder="Search a task" onChange={(e) => onSearch(e.target.value)} /> 
  
    )
}