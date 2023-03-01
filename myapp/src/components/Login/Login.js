// import { Link } from "react-router-dom"
import {  useState } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { apiLogin } from '../../http/auth.http'
import { updateUser } from '../../redux/user/user.action'
import './Login.css'

function Login(props)
{
    const[username,setUserName]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState('')
    return<>
        <div class="login-form">
            <div className='header'>
                Login
            </div>
            
            <form onSubmit={handleSubmit}>
                <div className='username-input'>
                    <span className='icon'>
                        <i className='fas fa-user'></i> 
                    </span>
                    <input type={'text'} value={username} 
                        onChange={e=>setUserName(e.target.value)}
                        placeholder='Username' required />
                </div>
                <div className='password-input'>
                    <span className='icon'>
                        <i className='fas fa-lock'></i> 
                    </span>
                    <input type={'password'} value={password}
                        onChange={e=>setPassword(e.target.value)} 
                        placeholder='Password'  required/>
                </div>
                {error&&<span className='alert alert-danger'>{error}</span>}
                <input type={'submit'}
                    className='btn btn-primary '
                    value='Login'/>
                <hr/>
                <span className='register-text'>Or Create A New Account ?</span>
                <Link to={'/register'} className='btn btn-primary register'>Register</Link>
            </form>
        </div>
    </>
    async function handleSubmit(e)
    {
        e.preventDefault()
        setError('')
        apiLogin({username:username,password:password})
        .then(data=>{
            props.updateUser({
                username:data.username,
                email:data.email,
                firstname:data.firstname,
                lastname:data.lastname,
                login:true
            })
        })
        .catch(e=>{
            setError(e)
        })
    }
}

export default connect(null,{updateUser:updateUser})(Login)