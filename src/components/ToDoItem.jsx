import React, { useState } from 'react';

function ToDoItem({ todo, toggleComplete, editTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);

  function handleSave() {
    if (editedTask.trim()) {
      editTodo(todo.id, editedTask);
      setIsEditing(false);
    }
  }

  return (
    <li className={todo.completed ? "completed" : ""}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button onClick={handleSave} className="save-btn">Save</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleComplete(todo.id)} className="task-text">
            {todo.task}
          </span>
          <div className="actions">
            <button  onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
