import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Components/pages/Login'
import SignUp from './Components/pages/SignUp';
import HomePage from './Components/pages/HomePage';

function App() {
  return (

    <Router>

      <Switch>

      <Route path = "/" exact component={HomePage} />
      <Route path = "/login"  component={Login} />
      <Route path = "/signup"  component={SignUp} />


      </Switch>

    
    </Router>

    
  );
}

export default App;
