import React from 'react'
import NavBar from './NavBar'

function PageTemplate(props) {
    
    return (
            <NavBar isUserLoggedIn={props.isUserLoggedIn}/>
        )
}

export default PageTemplate
