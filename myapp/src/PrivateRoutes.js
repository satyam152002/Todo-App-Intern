import { Routes,Route } from "react-router-dom";
import { updateUser } from "./redux/user/user.action";
import {connect} from 'react-redux'
import Todos from "./components/Todos/Todos.js";
import Account from "./components/Account/Account";
function PrivateRoutes(props)
{
    return<>
    <Routes>
        <Route path='/' element={<Todos/>}/>
        <Route path="/account" element={<Account/>}/>
    </Routes>
    </>
}

export default connect(null,{updateUser:updateUser})(PrivateRoutes)