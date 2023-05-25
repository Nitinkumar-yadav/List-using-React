import { useState, useEffect } from 'react';
import TodoList from './Todo.List';
import './todolist.css';

  function Task4() {
    const [list, setlist] =useState ("");
    const [Items, setItems] = useState([]);
    
    
    useEffect(() => {
      const storedTasks = JSON.parse(localStorage.getItem('Items'));
      if (storedTasks) {
        setItems(storedTasks);
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('Items', JSON.stringify(Items));
    }, [Items]);

    const item=(event)=>{
      setlist(event.target.value);
    };

    const listofItem=()=>{
        setItems((oldItems)=>{
          return [...oldItems,list]
        });
        setlist("");
    };

    const deleteItem =(id)=>{
      console.log("deleted")
      setItems((oldItems)=>{
        return oldItems.filter((arrEle, index)=>{
            return index!==id; 
        })
      })
  };
  return (
    <div className="App">
      <div className="App-header">
        <div className='Container'>
          <h3>Todo List </h3>
          <input type="text" placeholder="Add the Item" value= {list} onChange={item} /> 
        
          <button type="submit"className='Add' onClick={listofItem}> Add</button>
          
          <ol className='todo_style'>
           { Items.map((itemval,index)=> {
              return <TodoList 
              key={index}
              id={index}
              text={itemval}
              onSelect={deleteItem}
               />
            })}
          </ol>
          </div>
      </div>
    </div>
  );
}
export default Task4;
