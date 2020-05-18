import React from 'react'
import InputFeild from '../Template/InputFeild'
import OneLineGap from '../Template/OneLineGap'

function SignUp() {
    return (

        <div className="signup">

        <form className="ui form">

            <InputFeild label="First Name" type="text" name="first-name" placeholder="First Name"/>

            <InputFeild label="Last Name" type="text" name="last-name" placeholder="Last Name"/>

            <InputFeild label="Phone Number" type="number" name="phone-number" placeholder="Phone Number"/>

            <InputFeild label="Email" type="email" name="email" placeholder="Email"/>

            <InputFeild label="Password" type="password" name="password" placeholder="Password"/>

            <button className="ui button" type="submit">Submit</button>
      </form>

        <OneLineGap/>
        
      <div className="ui button"><a href="/">BACK TO HOME PAGE</a></div>

      </div>

      
    )
}

export default SignUp
