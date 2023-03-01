import { ADD_TODO,DEL_TODO, SETNULL_TODO, UPDATE_TODO}  from './todo.action'

const merge=(prev,next)=>Object.assign({},prev,next);

const todoReducer=(state=[],action)=>
{
    switch(action.type)
    {
        case SETNULL_TODO:
                return []
        case ADD_TODO:
            return [...state,action.payload]
        case DEL_TODO:
            return state.filter(todo=>todo.todoID!==action.payload.todoID);
        case UPDATE_TODO:
            state=state.map((todo)=>{
                if(todo.id===action.payload.id){
                todo=merge(todo,action.payload);
                }
                return todo
            })
            return state;
        default:
            return state;
    }

}
 
export default todoReducer