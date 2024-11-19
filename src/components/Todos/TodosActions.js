import Button from "../UI/Button"
import {RiDeleteBin2Line , RiRefreshLine} from 'react-icons/ri'
function TodosActions({resetTodos, deleteCompletedTodos, completedTodosExist}) {

  return (
    <>
      <Button title ="Reset Todos" onClick={resetTodos}><RiRefreshLine /></Button>
      <Button title="Clear completly Todos" onClick={deleteCompletedTodos} disabled={!completedTodosExist}><RiDeleteBin2Line /></Button>
    </>
  )
}
export default TodosActions
