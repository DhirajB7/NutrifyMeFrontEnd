import React from 'react'
import { getValueFromCookie } from '../API/CookieOperations'


function MealCard(props) {
    return (
        
        <div className="ui card">
          <div className="content">
            <div className="foodname ">{props.obj.foodName.toUpperCase()}</div>
            <hr/>
            <br/>
            <div className="cal">{props.obj.calorie}</div>
            <br/>
            <div className="desc">
            {props.obj.foodDescription.toUpperCase()}
            </div>
            <br/>
    {(getValueFromCookie('isAdminLoggedIn')==='true')?<div className="userNameInFoodCard"><i class="user icon"/> {props.obj.addedByUserName.toUpperCase()}</div>:null}
          </div>
        </div>
      
    )
}

export default MealCard
