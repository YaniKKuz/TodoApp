import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import "./App.css"
import TodosActions from "./components/Todos/TodosActions"
import TodoForm from "./components/Todos/TodoForm"
import TodoList from "./components/Todos/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      })
    )
  }
  const resetTodosHandler = () => {
    setTodos([])
  }
const deleteCompletedTodosHandler = () => {
  setTodos(todos.filter((todo)=> !todo.isCompleted))
}
const CompletedTodosCount = todos.filter((todo) => todo.isCompleted).length 

  return (
    <div className="App">
      <h1>Todo App</h1>
       <TodoForm addTodo={addTodoHandler} />
      {todos.length > 0 && <TodosActions resetTodos={resetTodosHandler} deleteCompletedTodos={deleteCompletedTodosHandler} completedTodosExist={!!CompletedTodosCount}/>}
      {todos.length === 0 ? (
        <h2>Todo list is empty</h2>
      ) : (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toggleTodo={toggleTodoHandler}
        />
      )
      }
       {CompletedTodosCount > 0 &&<h2>{`You have complete ${CompletedTodosCount} ${CompletedTodosCount > 1 ? 'todos' : 'todo'}`}</h2>}
    </div>
  )
}

export default App
