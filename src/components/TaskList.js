
import React, { useState } from 'react';

const TaskList = ({ tasks, markTask, deleteTask, editTask }) => {
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState(null);

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditText(task.text);
  };

  const handleSave = () => {
    if (editText.trim() !== '') {
      editTask(editId, editText);
      setEditId(null);
      setEditText('');
    }
  };

  return (
    <div className="task-container">
      <div className="blurry-background">
        <table className="task-list">
          <thead>
            <tr>
              <th>Task</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                <td>
                  {editId === task.id ? (
                    <>
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="task-item__edit-input"
                      />
                      <button onClick={handleSave} className="task-item__save">Save</button>
                    </>
                  ) : (
                    <>
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => markTask(task.id)}
                        className="task-item__checkbox"
                      />
                      <span className="task-item__text">{task.text}</span>
                    </>
                  )}
                </td>
                <td>{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : '-'}</td>
                <td>
                  <div className="task-item__action-buttons">
                    <button onClick={() => deleteTask(task.id)} className="task-item__delete">Delete</button>
                    <button onClick={() => handleEdit(task)} className="task-item__edit">Edit</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
