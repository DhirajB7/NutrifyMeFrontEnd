import React from 'react'
import InputFeild from './InputFeild'

function Login() {

    return (
       
        <div className="login">

        <form className="ui form">
        
        <InputFeild label="Email" type="email" name="email" placeholder="Email"/>

        <InputFeild label="Password" type="password" name="password" placeholder="Password"/>
        
        <button className="ui button" type="submit">Submit</button>

      </form>

        <br/>
      <div className="ui button"><a href="/">BACK TO HOME PAGE</a></div>

      </div>

    )
}

export default Login
