import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Task from './Task';
import '../styles/common.css';

const TaskList = () => {
  const [done, setDone] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [allTasks, setAllTasks] = useState([]);
  const navigate = useNavigate();

  const showTasks = () => {
    setDone(prevDone => !prevDone);
  };

  const resetFields = () => {
    setAllTasks([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setAllTasks(prevTasks => [
        ...prevTasks,
        { heading: newTask, checked: false, taskId: prevTasks.length },
      ]);
      setNewTask('');
    }
  };

  const handleCheck = (taskId, checked) => {
    setAllTasks(prevTasks =>
      prevTasks.map(task =>
        task.taskId === taskId ? { ...task, checked } : task
      )
    );
  };

  const logout = () => {
    navigate('/');
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Add Your Tasks</h1>
        <div className="Form">
          <input
            type="text"
            name="task"
            placeholder="Enter your task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            required
          />
        </div>
        <div className="buttons">
          <button className="button" type="submit">SUBMIT</button>
        </div>
      </form>
      <div className="buttons2">
        <button className="button" onClick={resetFields}>RESET</button>
        <button className="button" onClick={showTasks}>
          {done ? 'SHOW ALL TASKS' : 'SHOW COMPLETED TASKS'}
        </button>
      </div>
      <div className="taskinfo">
        <h2>Task List</h2>
        {allTasks
          .filter(task => done ? task.checked : true)
          .map(task => (
            <Task
              key={task.taskId}
              task={task}
              onCheck={handleCheck}
            />
          ))}
      </div>
      <button className="logout-button" onClick={logout}>Logout</button>
    </div>
  );
};

export default TaskList;
