import React, { useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { initialState, todoReducer } from './reducers/Todo'
import { clear } from 'sisteransi';
function App() {
  const [todo, setTodo] = useState("")
  const [todoState, dispatch] = useReducer(todoReducer, initialState);

  const handleChange = (e) => { 
  
    setTodo(e.target.value)
   
  }
  // const addItem = newItem => { 
  //   dispatch({type:"ADD_TODO", payload: newItem})
  // }

  function addItem (itemName){
        let item = {
            item: itemName,
            completed: false,
            id: Date.now() + Math.random()    
        }
        dispatch({ type: "ADD_TODO", payload: item})
    }

  const handleSubmit = (e) => { 
    e.preventDefault()
    addItem(todo)
    setTodo("");
  }

  const toggleCompleted = (id) => { 
    dispatch({type: "TOGGLE_TODO", payload: id})
    // return !todoState.completed
  }
  const checkAll = () => { 
    dispatch({type: "CHECKALL_COMPLETED"})
  }

  const uncheckAll = () => { 
    dispatch({type: "UNCHECKALL_COMPLETED"})
  }
  const clear = () => { 
    dispatch({type: "CLEAR"})
  }

  let arr = []
  arr.push(todoState)
  console.log('arr', arr);
  return (
    <div className="App">
      {console.log("todo", todoState)}
      
      {todoState.todoitems.map(input => {
        return (<div key={input.id} onClick={() => toggleCompleted(input.id)} style = { input.completed ? {textDecoration: `line-through darkRed` , color: 'grey'} : null}>{input.item}</div>)})}
      
     
     
      <form onSubmit = {handleSubmit}>
        <input
        type="text"
        value={todo}
        name="todo"
        onChange={handleChange}
        />
        <button>Add Todo</button>
        <button onClick={() => checkAll() }>CheckAll</button>
        <button onClick={() => uncheckAll()}>UnCheck All</button>
        <button onClick={() => clear()}>Clear</button>
      </form>
    </div>
  );
}

export default App;
