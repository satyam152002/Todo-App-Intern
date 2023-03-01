import { apiChangeStateTodo, apiDeleteTodo } from "../../../http/todo.http"
import { connect } from "react-redux"
import{delTodo, updateTodo} from './../../../redux/todo/todo.action'
function TodoItem({todo,delTodo,updateTodo})
{
    return<div className='todo-item alert alert-light my-1'>
        <input type='checkbox'
            className="form-switch"
            onChange={toggleTodo}
            value={todo.completed} />
        <span data-date={new Date(todo.dueDate).toLocaleString().split(',')[0]}>{todo.task}</span>
        <i className="fas fa-trash todo-delete-icon" onClick={handleClick}></i>
    </div>

    function handleClick()
    {
        apiDeleteTodo({todoID:todo.todoID})
        .then(res=>{
            delTodo({todoID:todo.todoID})
        })
        .catch(e=>console.log(e))
    }
    function toggleTodo()
    {
        console.log(todo)
        updateTodo({completed:!todo.completed})
        apiChangeStateTodo({completed:!todo.completed,todoID:todo.todoID})
        .then(res=>console.log(res))
        .catch(e=>console.log(e))
    }
}

const mapDispatchToProps={
    delTodo:delTodo,
    updateTodo:updateTodo
}
export default connect(null,mapDispatchToProps)(TodoItem)