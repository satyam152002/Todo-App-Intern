// import { Link } from "react-router-dom"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { apiRegister } from '../../http/auth.http'
import './Register.css'
function Register(props)
{
    const[firstname,setFirstName]=useState('')
    const[lastname,setLastName]=useState('')
    const[email,setEmail]=useState('')
    const[username,setUserName]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState('')
    const[success,setSuccess]=useState('')
    return<>
        <div class="register-form">
            <div className='header'>
                Register
            </div>
            <form onSubmit={handleSubmbit}>
                <input type={'text'} value={firstname}
                    onChange={e=>setFirstName(e.target.value)}
                    placeholder='Firstname' required/>
                <input type={'text'} value={lastname} 
                    onChange={e=>setLastName(e.target.value)}
                    placeholder='Lastname' required/>
                <input type={'email'} value={email}
                    onChange={e=>setEmail(e.target.value)}
                    placeholder='Email' required/>
                <input type={'text'} value={username}
                    onChange={e=>setUserName(e.target.value)}
                    placeholder='Username' required/>
                <input type={'password'} value={password}
                    onChange={e=>setPassword(e.target.value)}
                    placeholder='Password' required/>
                {
                    error&&
                    <span className='alert alert-danger'>{error}</span>
                }
                {
                    success&&
                    <span className='alert alert-info'>{success}</span>

                }
                <input type={'submit'}
                    className='btn btn-primary '
                    value='Register'/>
                <hr/>
                <span className='login-text'>Already Have An Account?</span>
                <Link to={'/'} className='btn btn-primary login'>Login</Link>
            </form>
        </div>
    </>
    function handleSubmbit(e)
    {
        e.preventDefault()
        setError('')
        setSuccess('')
        apiRegister({
            firstname:firstname,
            lastname:lastname,
            email:email,
            username:username,
            password:password
        })
        .then(data=>{
            setSuccess(data)
        })
        .catch(e=>{
            setError(e)
        })

    }
}

export default Register