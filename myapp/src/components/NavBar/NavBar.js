import { Link } from "react-router-dom"
import {connect} from 'react-redux'
import  './NavBar.css'

function NavBar(props) {
    return(
    <nav className="nav-bar">
        <NavHeader user={props.user}/>
        {
            props.user.login
            &&
            <NavLinks user={props.user} />
        }
    </nav>
    )
}

function NavHeader(props)
{
    return<>
    <div className='nav-header'>
            <span className={'app-name'}>Todo App</span>
    </div>
    </>
}

function NavLinks(props)
{
    return<>
        <div className={'nav-links'}>
            <Link to={'/'} >
                <i className="fas fa-list"></i>
                Todo
            </Link>
            <Link to={'/account'}>
                <i className="fas fa-user"></i>
                Account
            </Link>
        </div>
    </>
}

export default connect((state)=>({user:state.user}))(NavBar)