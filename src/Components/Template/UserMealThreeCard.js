import React from 'react'
import OneLineGap from './OneLineGap'
import PreLoader from './PreLoader'
import UserMealCard from './UserMealCard'

function UserMealThreeCard(props) {
    if(props.myMealDataArray==="loading"){

        return (
            <PreLoader/>
        )

    }else{
 
    return (
        <React.Fragment>

        <h1 className="ui center violet aligned header">MY MEALS</h1>

        <OneLineGap/>

        <div className="ui three cards">
           
        {props.myMealDataArray.map(element => {
                return  (<UserMealCard key ={element.foodName} obj={element}/>)
            })}
           
        </div>
    </React.Fragment>
    )
}
}

export default UserMealThreeCard
