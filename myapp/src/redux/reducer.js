import { combineReducers } from "redux";
import userReducer  from './user/user.reducer'
import todoReducer  from './todo/todo.reducer'


const reducer=combineReducers({
    user:userReducer,
    todos:todoReducer
});

export default reducer;
