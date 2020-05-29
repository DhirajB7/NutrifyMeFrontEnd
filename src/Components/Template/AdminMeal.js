import React, { Component } from "react";
import GetAllMeals from "../API/GetAllMeals";
import MealThreeCard from "./MealThreeCard";

class AdminMeal extends Component {
    state = {
        mealData: []
      };
    
      componentDidMount() {
    
        let data = GetAllMeals();
    
        data.then((a) => {
          a.data.forEach((element) => {
            this.setState({
              mealData: this.state.mealData.concat(element)
            });
          });
        });
      }
    
     
    
      render() {
    
        return (
          
    
            <div className="cards-display">
              
              <MealThreeCard mealDataArray = {(this.state.mealData.length===parseInt(localStorage.getItem("mealsLength")))?this.state.mealData:"loading"}/>
              
            </div>
         
        )
        
      }
}
export default AdminMeal