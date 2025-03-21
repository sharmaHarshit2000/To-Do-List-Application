import { useState } from "react";
import ToDoItem from "./ToDoItem";
function ToDoList({ todos, addTodo, toggleComplete, editTodo, deleteTodo }) {

    const [newTask, setNewTask] = useState("");

    function handleAddTodo() {
        if (newTask.trim()) {
            addTodo(newTask);
            setNewTask("")
        }
    }

    return (
        <div>
            <div className="input-container">
                <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add a new task..." />
                <button onClick={handleAddTodo}>Add</button>
            </div>

            <ul>
                {todos.map((todo) => {
                    return (
                        <ToDoItem
                            key={todo.id}
                            todo={todo}
                            toggleComplete={toggleComplete}
                            editTodo={editTodo}
                            deleteTodo={deleteTodo} />
                    )
                })}
            </ul>
        </div>

    )

}

export default ToDoList;




