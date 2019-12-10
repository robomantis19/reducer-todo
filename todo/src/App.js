import React, { useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { initialState, todoReducer } from './reducers/Todo'
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

  const clearCompleted = (id) => { 
    dispatch({type: "TOGGLE_TODO", payload: id})
  }

  let arr = []
  arr.push(todoState)
  console.log('arr', arr);
  return (
    <div className="App">
      {console.log("todo", todoState)}
      {todoState.item.map(input => {
        return (<div key={input.id} onClick={() => clearCompleted(input.id)} style = { input.completed ? {textDecoration: `line-through darkRed` , color: 'grey'} : null}>{input.item}</div>)})}
      {/* {todo} */}
      <form onSubmit = {handleSubmit}>
        <input
        type="text"
        value={todo}
        name="todo"
        onChange={handleChange}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default App;
