import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Login from './Components/pages/Login'
import SignUp from './Components/pages/SignUp'
import HomePage from './Components/pages/HomePage'
import Welcome from './Components/pages/Welcome'
import Logout from './Components/pages/Logout'
import PageNotFound from './Components/Template/PageNotFound'


function App(){


  return (

    <Router>

      <Switch>

      <Route path = "/" exact component={HomePage} />
      <Route path = "/login"  component={Login} />
      <Route path = "/signup" component={SignUp} />
      <Route path = "/users" component={() => <Welcome open = "users"/>}/>
      <Route path = "/meals" component={() => <Welcome open = "meals"/>}/>
      <Route path = "/home" component={() => <Welcome open = "home"/>}/>
      <Route path = "/history" component={() => <Welcome open = "history"/>}/>
      <Route path = "/logout" component={Logout}/>
      <Route component={PageNotFound}/>


      </Switch>

    
    </Router>

    
  )
   }


export default App;
