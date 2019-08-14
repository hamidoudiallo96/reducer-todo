import React,{useReducer,useState} from 'react';
import {initialState,reducer} from './Reducers/reducer'
import TodoList from './Components/TodoList'
import './App.css';


function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  const [inputValue,setInputValue] = useState('')
  

  

  // Reducer Methods
  const handleAdd = task =>{
    const setUp = {
      item: task,
      completed: false, 
      id: Date.now()
      
    }
    
    dispatch({type: 'Add_Item', payload: setUp})
    console.log('setUp',setUp)
  }
  const RemoveItems = () =>{
    dispatch({type: 'Clear_Tasks'})
  }

  const handleToggle = id =>{
    dispatch({type: 'Toggle_Task', payload:id})
  }


  // event handlers
  const handleChange = e =>{
    e.preventDefault()
    setInputValue(e.target.value)
    



  } 
  const handleSubmit = e =>{
    e.preventDefault()
    handleAdd(inputValue)
   
  }

  const handleDelete = e =>{
    e.preventDefault()
    RemoveItems()
  }

    

  
  return (
      <div>
          <h2>Todo List:</h2>
          <form onSubmit = {handleSubmit}>
              <input name ="item" placeholder = "New Task" value = {inputValue}  onChange = {handleChange}/>
              <button onClick = {() =>handleSubmit} type = "submit">Add Task</button>
          </form>
          <button onClick = {() =>handleDelete}>Clear Completed</button>

          <TodoList handleToggle = {handleToggle} task = {state} />
        </div>
    )
  
}

export default App;
