import React from 'react'


function MealCard(props) {
    return (
        
        <div className="ui card">
          <div className="content">
            <div className="foodname ">{props.obj.foodName.toUpperCase()}</div>
            <hr/>
            <div className="cal">{props.obj.calorie}</div>
            <br/>
            <div className="desc">
            {props.obj.foodDescription.toUpperCase()}
            </div>
          </div>
        </div>
      
    )
}

export default MealCard
