import React from 'react';

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <li key={index} className={`list-group-item d-flex justify-content-between `}>
          <span  style={{ cursor: 'pointer' }} className={`${task.completed ? 'completed' : ''}`}>
            {task.text}
          </span>
          <div>
          <button className="btn btn-primary ml-2" onClick={() => toggleComplete(index)}>Check</button>
          <button className="btn btn-danger ml-2" onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
