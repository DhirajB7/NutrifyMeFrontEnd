import React from 'react'
import UserCardsThree from './UserCardsThree'
import PageTemplate from './PageTemplate'
import GetAllUsers from '../API/GetAllUsers'



function AdminOperationOptions() {


   console.log(GetAllUsers())

    return (
        
        <div>

            <PageTemplate/>

 
        <div className = "cards-display">
            
           <UserCardsThree/>

           <UserCardsThree/>

           <UserCardsThree/>
           
        </div> 

        </div>
        
    ) 
}

export default AdminOperationOptions
