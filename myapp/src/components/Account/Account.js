import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setNullTodo } from "../../redux/todo/todo.action"
import { updateUser } from "../../redux/user/user.action"
import './Account.css'

function Account(props)
{
    const navigator=useNavigate()
    return<>
    <div className="profile">
        <div className="field ">
            <span className="field-key">Firstname</span>
            <span className="field-value">{props.user.firstname}</span>
        </div>
        <div className="field">
            <span className="field-key">Lastname </span>
            <span className="field-value">{props.user.lastname}</span>
        </div>
        <div className="field">
            <span className="field-key">Username </span>
            <span className="field-value">{props.user.username}</span>
        </div>
        <div className="field">
            <span className="field-key">Email </span>
            <span className="field-value">{props.user.email}</span>
        </div>
        <button 
            onClick={handleLogout}
            className="btn btn-outline-danger my-2">
            Logout
        </button>
    </div>
    </>
    function handleLogout()
    {
        props.updateUser({login:false})
        props.setNullTodo({})
        navigator('/')
    }
}

const mapStateToProps=(state)=>({
    user:state.user
})
const mapDispatchToProps={
    updateUser:updateUser,
    setNullTodo:setNullTodo
}
export default connect(mapStateToProps,mapDispatchToProps)(Account)