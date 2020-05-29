import React, { Component } from 'react'
import OneLineGap from './OneLineGap'
import DeleteMeal from '../API/DeleteMeal'
import PutMealDescription from '../API/PutMealDescription'

class UserMealCard extends Component {


    state= {

        isEditClicked:false,
        newDescription:''

    }



    deleteClicked=()=> {

     DeleteMeal(this.props.obj.foodName)
     window.location.reload()

    }

    editClicked = () => {

      this.setState({
        isEditClicked:true
      })

    }

    saveClicked = () => {

      PutMealDescription(this.props.obj.foodName,this.state.newDescription)

      this.setState({
        isEditClicked:false,
        newDescription:''
      })

      window.location.reload()

    }

    changeTextArea = (event) => {
        this.setState({
          newDescription : event.target.value
        })
    }

    render(){

      console.log(this.state.newDescription)

    return (
        <div className="ui card">
        <div className="content">
          <div className="header">{this.props.obj.foodName.toUpperCase()}</div>
          <hr/>
          <br/>
          <div className="cal">{this.props.obj.calorie}</div>
          <OneLineGap/>

          {this.state.isEditClicked 
          ? 
          <React.Fragment>
          <span>Old Description :
          <div className="old-description">
          {this.props.obj.foodDescription.toUpperCase()}</div>
          </span>
          <br/>
            <span>New Description :
            <div className="new-description">
            <textarea rows="4" cols="50" value={this.state.newDescription} onChange={this.changeTextArea}></textarea>
            </div>
            </span>
            </React.Fragment>
          :
          <div className="description">
          {this.props.obj.foodDescription.toUpperCase()} 
          </div>
          }
  
        </div>

        <div className="extra content">
          <div className="right floated delete" onClick={this.deleteClicked}>
            <i className="trash icon" />
            DELETE
          </div>

          {this.state.isEditClicked ? (
            <div className="left save" onClick={this.saveClicked}>
              <i className="save icon" />
              SAVE
            </div>
          ) : (
            <div className="left edit" onClick={this.editClicked}>
              <i className="edit icon" />
              EDIT
            </div>
          )}
        </div>

      </div>
    )
}
}

export default UserMealCard
