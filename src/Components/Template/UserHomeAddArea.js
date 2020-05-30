import React, { Component } from 'react'
import InputFeild from './InputFeild'
import AddMeal from '../API/AddMeal'

class UserHomeAddArea extends Component {


    state = {
        foodName:'',
        foodDescription:'',
        buttonClickable:true
    }


    foodnameFetch = (data) => {
        this.setState({
            foodName:data
        })
    }


    descriptionFetch = (data) => {
        this.setState({
            foodDescription:data
        })
    }

    addMealButtonClicked = () => {
        this.setState({
            buttonClickable:false
        })

        AddMeal(this.state.foodName,this.state.foodDescription)

    }

    componentDidMount(){
        this.setState({
            buttonClickable:true
        }) 
    }


    render(){

    return (
        <div>
            <h3 className="ui center green aligned header">ADD MEAL</h3>
            <div className="ui form">
            <InputFeild
              label="Food Name"
              type="text"
              placeholder="Name Of Food"
              getValue={this.foodnameFetch}
            />
            <InputFeild
              label="Description"
              type="text"
              placeholder="Short Description"
              getValue={this.descriptionFetch}
            />
            <button className="ui primary button" onClick={this.addMealButtonClicked}><i className="upload icon"/>{(this.state.buttonClickable)? "ADD MEAL" : "PLEASE WAIT" } </button>
            </div>
        </div>
    )

    }
}

export default UserHomeAddArea
