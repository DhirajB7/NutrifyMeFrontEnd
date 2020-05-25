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
        <div className="ui huge button"><a href="/login">SIGN IN</a></div>
        <OneLineGap/>
        <div className="ui huge button"><a href="/signup">SIGN UP</a></div>
      </div>
      </div>
    )
}

export default HomePage
