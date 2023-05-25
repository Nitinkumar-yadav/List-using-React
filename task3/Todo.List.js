import React from "react";

const TodoList = (props) =>{
    
    return(
        <>
        <div>
        <li> {props.text} 
        <button onClick={()=>{
            props.onSelect(props.id);
        }}>Delete</button>
        
        </li>
            
        </div>
        </>
    )
};
export default TodoList; 