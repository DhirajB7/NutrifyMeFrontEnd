import React from 'react'
import OneLineGap from '../Template/OneLineGap'


function HomePage() {

    return (
        <div className="Home">

            <div className="ui text container">
                    <h1 className="ui teal header">
                    WELCOME TO NUTRIFY
                    </h1>
        <OneLineGap/>
       
      </div>
      <div className="ui placeholder segment Home">
        <div className="ui two column very relaxed stackable grid">
          <div className="middle aligned column">
          <div className="ui big button">
              <a href="/login"> <i className="paper plane icon" /> SIGN IN</a>
            </div>
          </div>
          <div className="middle aligned column">
            <div className="ui big button">
            <a href="/signup"> <i className="signup icon" /> SIGN UP</a>
            </div>
          </div>
        </div>
        <div className="ui vertical divider">
          Or
        </div>
      </div>
      </div>
    )
}

export default HomePage
