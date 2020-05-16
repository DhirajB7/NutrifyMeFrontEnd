import React from 'react'

function SignUp() {
    return (

        <div className="signup">
        <form className="ui form">
        <div className="field">
          <label>First Name</label>
          <input type="text" name="first-name" placeholder="First Name" />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input type="text" name="last-name" placeholder="Last Name" />
        </div>
        <div className="field">
          <label>Phone Number</label>
          <input type="number" name="phone-number" placeholder="Phone Number" />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        
        <div className="ui button" type="submit">Submit</div>
      </form>

        <br/>
      <div className="ui button"><a href="/">BACK TO HOME PAGE</a></div>

      </div>

      
    )
}

export default SignUp
