import React, { Component } from 'react'
import PageTemplate from '../Template/PageTemplate'
import { getValueFromCookie } from '../API/CookieOperations'

class Welcome extends Component {


    render() {
        return (
            <React.Fragment>
                <PageTemplate/>
            <div className="welcome">  
                <h1>I AM WELCOME PAGE</h1>
            </div>
            </React.Fragment>
            
        ) 
    }
}

export default Welcome