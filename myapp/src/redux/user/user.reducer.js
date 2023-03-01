import {UPDATE_USER} from './user.action'

const merge=(prev,next)=>Object.assign({},prev,next);

const userReducer=(state={login:false},action)=>
{
    switch(action.type)
    {
        case UPDATE_USER:
            return merge(state,action.payload);
        default:
            return state;
    }
}

export default userReducer