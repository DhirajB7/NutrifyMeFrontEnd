import React from 'react'

function NavBar(props) {


  if(props.isUser==="user"){

    return (
      <div className="ui secondary pointing menu">
  <a className="item" href="/home">
    HOME
  </a>
  <a className="item" href="/history">
    HISTORY
  </a>
  <a className="item" href="/meals">
    ALL MEALS
  </a>
  <div className="right menu">
    <a className="ui item" href="/logout">
      LOGOUT
    </a>
  </div>
</div>
    )

  } else if(props.isUser==="admin"){

    return (
      <div className="ui secondary pointing menu">
  <a className="item" href="/users">
    USERS
  </a>
  <a className="item" href="/meals">
    MEALS
  </a>

  <div className="right menu">
    <a className="ui item" href="/logout">
      LOGOUT
    </a>
  </div>
</div>
    )

  }else{

    return (
      <div className="ui secondary pointing menu">
        <div className="right menu">
        <a className="item" href="/logout">
            LOGOUT
          </a>
        </div>
      </div>
    )

  }

   
}

export default NavBar
