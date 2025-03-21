import { useState } from "react"
import Header from "./components/Header"
import ToDoList from "./components/ToDoList";
import "./App.css"

function App() {

  const [todos, setTodos] = useState([])

  function addTodo(task) {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo])
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo
      })
    )
  }

  function editTodo(id, newTask) {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, task: newTask } : todo
      })
    )
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }


  return (
    <div className="app">
      <Header />
      <ToDoList
        todos={todos}
        addTodo={addTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
        deleteTodo={deleteTodo}

      />
    </div>
  )
}

export default App;