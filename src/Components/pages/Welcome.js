import React, { Component } from 'react'
import PageTemplate from '../Template/PageTemplate'
import { getValueFromCookie } from '../API/CookieOperations'

class Welcome extends Component {

   state = {
        role:''
   }

   componentDidMount(){
       if(getValueFromCookie('isUserLoggedIn')==='true'){

        this.setState({
            role:"USER"
        })

       }else{

        this.setState({
            role:"ADMIN"
        })


       }
   }

    render() {
        return (
            <React.Fragment>
                <PageTemplate/>
            <div className="welcome">  
                <h1>ROLE {this.state.role}</h1>
            </div>
            </React.Fragment>
            
        ) 
    }
}

export default Welcome