import { useEffect } from "react";
import { connect } from "react-redux";
import { apiLoadTodo } from "../../http/todo.http";
import { addTodo, setNullTodo } from "../../redux/todo/todo.action";
import TodoContainer from "./TodoContainer/TodoContainer";
import TodoInput from "./TodoInput/TodoInput";


function Todos(props)
{
    useEffect(()=>{
            apiLoadTodo()
            .then(todos=>{
                props.setNullTodo({})
                todos.forEach(todo=>{
                    props.addTodo(todo)
                })
            })
            .catch(e=>{
                console.log(e)
            })
    })
    return<>
        <TodoContainer/>
        <TodoInput />
    </>
}


export default connect(null,{addTodo:addTodo,setNullTodo:setNullTodo})(Todos)