import React, { Component } from 'react'
import UserMealThreeCard from './UserMealThreeCard'
import GetAllMealsOfOneUser from '../API/GetAllMealsOfOneUser'
import { getValueFromCookie } from '../API/CookieOperations'

class UserMeals extends Component {

    state = {
        myMeals:[]
    }

    componentDidMount(){

       let data = GetAllMealsOfOneUser(getValueFromCookie("Username"))

       data.then((a) => {
        a.data.forEach((element) => {
          this.setState({
            myMeals: this.state.myMeals.concat(element)
          });
        });
      });
    }

    

    render(){
    return (
        <div className="cards-display">
           <UserMealThreeCard myMealDataArray = {(this.state.myMeals.length===parseInt(localStorage.getItem("myMealsLength")))?this.state.myMeals:"loading"}/>
        </div>
    )
    }
}

export default UserMeals
