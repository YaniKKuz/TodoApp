import { useState } from "react"
import styles from "./TodoForm.module.css"
import Button from "../UI/Button"
function TodoForm({ addTodo }) {
  const [text, setText] = useState("")
  const onSubmitHandler = (event) => {
    if (text !== "") {
      addTodo(text)
    }
    event.preventDefault()
    setText("")
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  )
}
export default TodoForm
