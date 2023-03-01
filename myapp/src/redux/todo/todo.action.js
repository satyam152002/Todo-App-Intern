//action type
export const ADD_TODO='ADD_TODO';
export const DEL_TODO='DEL_TODO';
export const UPDATE_TODO='UPDATE_TODO';
export const SETNULL_TODO='SETNULL_TODO'

//action creators
export const addTodo=(update)=>({type:ADD_TODO,payload:update});
export const delTodo=(update)=>({type:DEL_TODO,payload:update});
export const updateTodo=(update)=>({type:UPDATE_TODO,payload:update});
export const setNullTodo=(update)=>({type:SETNULL_TODO,payload:update});

