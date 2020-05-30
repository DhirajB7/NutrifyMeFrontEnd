import React from 'react'
import PageNotFound from './PageNotFound'
import AdminMeal from './AdminMeal'
import UserHome from './UserHome'
import UserMeals from './UserMeals'
import UserHistory from './UserHistory'

function UserOperationOptions(props) {

    if(props.toOpen==="home"){

        return(

           <UserHome/>

        )

    }else if(props.toOpen==="history"){
        return (
            <UserHistory/>
        )
    }
    else if(props.toOpen==="mymeals"){

        return(

           <UserMeals/>

            )

    }else if(props.toOpen==="meals"){

        return(

            <AdminMeal/>
            
            )

    }else{
        return(
            <PageNotFound/>
        )
    }
}

export default UserOperationOptions
