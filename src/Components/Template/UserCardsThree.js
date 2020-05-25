import React from 'react'
import UserCard from './UserCard'
import PreLoader from './PreLoader';
import OneLineGap from './OneLineGap'

function UserCardsThree(props) {

 
    if(props.userDataArray==="loading"){

        return (
            <PreLoader/>
        )

    }else{
 
   

     return(

            <React.Fragment>

                <h1 className="ui center violet aligned header">LIST OF USERS</h1>

                <OneLineGap/>

            <div  className = "ui three cards">


            {props.userDataArray.map(element => {
                return  (<UserCard key ={element.username} obj={element}/>)
            })}
            
    
            </div>

            </React.Fragment>

        )
    }
   
}

export default UserCardsThree
