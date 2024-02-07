
import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      addTask(taskText, dueDate);
      setTaskText('');
      setDueDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '50px', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Enter task..."
        value={taskText}
        onChange={handleChange}
        style={{ padding: '15px', marginRight: '10px' , color:'white',fontSize: '20px', border: '5px', borderRadius: '10px', borderColor: 'white', backgroundColor:'black'}}
      />
      <input
        type="date"
        value={dueDate}
        onChange={handleDateChange}
        style={{ padding: '15px', marginRight: '10px' , color:'white' ,fontSize: '20px', border: '5px', borderRadius: '10px', borderColor: 'white', backgroundColor:'black'}}
      />
      <button type="submit" style={{ padding: '15px',color:'white', marginRight: '10px' , fontSize: '20px', border: '5px', borderRadius: '10px', borderColor: 'white', backgroundColor:'black' }}>Add Task</button>
    </form>
  );
};

export default TaskInput;
