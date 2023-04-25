import Header from "./component/Header";
import Footer from "./component/Footer";
import Tasks from "./component/Tasks";
import AddTask from "./component/AddTask";
import About from "./component/About";

import React,{ useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

let tasks = [];

function App() {
  const [taskes,updateTastk] = useState(tasks);
  const [showAddTask, setShowAddTask] = useState(false)

  useEffect(() => {
    const getTasks = async() => {
      const taskFromServer = await fetchTasks()
      updateTastk(taskFromServer)
    }

    getTasks()
  },[])

  //fetch link
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data;
  }

  //fetch singl elink
  const fetchSingleTasks = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data;
  }

  //add task
  const addTask = async (task) =>{
    const res = await fetch('http://localhost:5000/tasks',{
      method : 'POST',
      headers:{
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    updateTastk([...taskes,data])

    //static data
    //  const id= Math.floor((Math.random() * 10000 ) + 1 )
    //  const newTask = {id, ...task}
    //  updateTastk([...taskes,newTask])
  } 

  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE',
    })

    updateTastk(taskes.filter((task) => {return task.id !== id}))
  }

  //reminder toogle
  const toggleReminder = async (id) => {
    const singleTask = await fetchSingleTasks(id)
    const updTask = {...singleTask,reminder:!singleTask.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(updTask)
    })

    const data = await res.json()

    updateTastk(taskes.map((task) =>  task.id === id ? {...task, reminder:!data.reminder} : task ))
  }

  return (
    <Router>
      <div className="container">
          <Header onAdd={() => { setShowAddTask(!showAddTask) }} openForm={showAddTask}/>
          
            <Routes>
              <Route path='/' element={
              <>
                {showAddTask && <AddTask onAdd={addTask}/>}
                {taskes.length > 0 ? (
                    <Tasks task={taskes} ondel={deleteTask} ontog={toggleReminder}/>
                  ) : (
                    "No Tasks Available"
                  ) }
              </>
            }></Route>

              <Route path='/about' component={<About />}></Route>
            </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
