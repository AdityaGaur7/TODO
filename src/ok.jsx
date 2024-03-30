import React, { useState,useEffect } from 'react';
import TaskInput from './components/Taskinput'
import TaskList from './components/Tasklist';

const App = () => {
    const [tasks, setTasks] = useState(
      JSON.parse(localStorage.getItem('tasks')) || []
    );
  
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
  
    const addTask = (text) => {
      const newTask = { text, completed: false };
      setTasks([...tasks, newTask]);
    };
  
    const deleteTask = (index) => {
      setTasks(tasks.filter((_, i) => i !== index));
    };
  
    const toggleComplete = (index) => {
      setTasks(
        tasks.map((task, i) =>
          i === index ? { ...task, completed: !task.completed } : task
        )
      );
    };
  
    return (
      <div className="container">
        <h1 className="mt-4 mb-4">To-Do App</h1>
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
      </div>
    );
  };
  

export default App;
