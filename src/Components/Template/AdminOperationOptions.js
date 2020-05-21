import React from 'react'
import UserCardsThree from './UserCardsThree'
import PageTemplate from './PageTemplate'
import GetAllUsers from '../API/GetAllUsers'



function AdminOperationOptions() {



    GetAllUsers()



    return (
        
        <React.Fragment>

            <PageTemplate/>


        <div className = "cards-display">
            
           <UserCardsThree/>

           <UserCardsThree/>

           <UserCardsThree/>
           
        </div>

        </React.Fragment>
        
    ) 
}

export default AdminOperationOptions
