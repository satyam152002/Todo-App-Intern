import './App.css';
import {connect} from 'react-redux'
import {updateUser} from './redux/user/user.action'
import {BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
function App(props) {
  
  return (
    <BrowserRouter>
      <NavBar/>
      {
        !props.user.login?
        <PublicRoutes/>:
        <PrivateRoutes/>
      }
    </BrowserRouter>
  );
}
export default connect((state)=>state,{updateUser:updateUser})(App);
