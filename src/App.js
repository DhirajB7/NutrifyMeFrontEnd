import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/SignUp';
import HomePage from './Components/HomePage';

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
