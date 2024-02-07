
import './App.css'
import React, { useState } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (taskText, dueDate) => {
    if (taskText.trim() !== '') {
      const newTask = { id: Date.now(), text: taskText, completed: false, dueDate: dueDate || null, date: new Date() };
      setTasks([...tasks, newTask]);
    }
  };

  const markTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const editTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const filterTasks = (status) => {
    setFilter(status);
  };

  const sortedTasks = [...tasks].sort((a, b) => new Date(b.date) - new Date(a.date));

  const filteredTasks = sortedTasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'incomplete') {
      return !task.completed;
    } else {
      return true;
    }
  });

  return (
    <div className="App">
      <Header />
      <TaskInput addTask={addTask} />
      <FilterBar setFilter={filterTasks} />
      <TaskList
        tasks={filteredTasks}
        markTask={markTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
