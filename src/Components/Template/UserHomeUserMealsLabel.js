import React from 'react'

function UserHomeUserMealsLabel(props) {
    return (
        <div className="ui card">
          <div className="content">
            <div className="foodname">{props.foodName.toUpperCase()}</div>
        
            <br/>
            <div className="cal">{props.cal}</div>
            <br/>

          </div>
        </div>
    )
}

export default UserHomeUserMealsLabel
