import React, { Component } from 'react'
import UserHomeAddArea from './UserHomeAddArea'
import UserHomeDisplayCal from './UserHomeDisplayCal'
import UserHomeUserMeals from './UserHomeUserMeals'
import OneLineGap from './OneLineGap'

class UserHome extends Component {

  render(){

    return (
        <div>
            <h1 className="ui center violet aligned header">User Home</h1>

          <div className="ui segment Home">
        <div className="ui two column very relaxed stackable grid">
          <div className="middle aligned column">
            <UserHomeAddArea/>
          </div>
          <div className="middle aligned column">
           <UserHomeDisplayCal/>
          </div>
        </div>
        <div className="ui vertical divider">
            &
        </div>
      </div>

      <OneLineGap/>
      <OneLineGap/>

      <UserHomeUserMeals/>



        </div>
    )
}

}

export default UserHome
