import React from 'react'
import NavBar from './NavBar'

function PageTemplate(props) {
    
    return (
            <NavBar isUser={props.isUser}/>
        )
}

export default PageTemplate
