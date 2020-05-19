import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Login from './Components/pages/Login'
import SignUp from './Components/pages/SignUp'
import HomePage from './Components/pages/HomePage'
import Welcome from './Components/pages/Welcome'
import Logout from './Components/pages/Logout'
import { getValueFromCookie } from './Components/API/CookieOperations'
import PageNotFound from './Components/pages/PageNotFound'


function App() {

  const isUser = getValueFromCookie('isUserLoggedIn') === 'true'

  const isAdmin = getValueFromCookie('isAdminLoggedIn') === 'true'

  return (

    <Router>

      <Switch>

      <Route path = "/" exact component={(isUser || isAdmin) ? Welcome : HomePage} />
      <Route path = "/login"  component={Login} />
      <Route path = "/signup" component={SignUp} />
      <Route path = "/logout" component={Logout}/>
      <Route component={PageNotFound}/>


      </Switch>

    
    </Router>

    
  );
}

export default App;
