import React from 'react'

function NavBar(props) {

  if(props.isUserLoggedIn){
    return (
      <div className="ui secondary pointing menu">
        <div className="right menu">
        <a className="item" href="/logout">
            LOGOUT
          </a>
        </div>
      </div>
    )
    }else{
      return (
        <div className="ui secondary pointing menu">
          <div className="right menu">
          <a className="active item" href="/login">
            LOGIN
          </a>
          <a className="item" href="/signup">
            SIGNUP
          </a>
          </div>
        </div>
      )
    }
  
  }


export default NavBar
