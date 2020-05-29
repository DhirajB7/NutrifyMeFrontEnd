import React from 'react'
import MealCard from './MealCard'
import OneLineGap from './OneLineGap'
import PreLoader from './PreLoader'

function MealThreeCard(props) {

    if(props.mealDataArray==="loading"){

        return (
            <PreLoader/>
        )

    }else{
 
    return (
        <React.Fragment>

        <h1 className="ui center violet aligned header">LIST OF MEALS</h1>

        <OneLineGap/>

        <div className="ui six cards">
           
        {props.mealDataArray.map(element => {
                return  (<MealCard key ={element.foodName} obj={element}/>)
            })}
           
        </div>
    </React.Fragment>
    )
}
}

export default MealThreeCard
