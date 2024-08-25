import React from 'react';
import '../styles/common.css';

const Task = ({ task, onCheck }) => {
  const handleCheck = (event) => {
    onCheck(task.taskId, event.target.checked);
  };

  return (
    <div className="task">
      <h3 className={task.checked ? 'completed' : ''}>{task.heading}</h3>
      <input
        type="checkbox"
        checked={task.checked}
        onChange={handleCheck}
      />
    </div>
  );
};

export default Task;
