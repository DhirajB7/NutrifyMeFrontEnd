import React, { Component } from "react";
import DeleteUser from "../API/DeleteUser";


class UserCard extends Component {

  state = {
    isEditClicked:false
  }

  deleteClicked = () => {
    DeleteUser(this.props.obj.userId)
    alert("USER "+ this.props.obj.userId + " IS DELETED")
    window.location.reload()
  }

  editClicked = () =>{
    console.log(this.props.obj.username)

    this.setState({
      isEditClicked : true
    })

  }

  saveClicked = () =>{
    console.log(this.props.obj.username)

    this.setState({
      isEditClicked : false
    })

    //put request

  }



  render(){

  return (
    <div className="ui small card">
      <div className="content">
  <div className="header">{this.props.obj.firstname+" "+this.props.obj.lastname}</div>
  <hr/>
        <div className="data">
            <div className="date"> <span className="data-name">USERNAME : </span> <span className="data-value">{this.props.obj.username}</span></div>
            <br/>
            <div className="date"> <span className="data-name">EMAIL : </span> <span className="data-value">{this.props.obj.email}</span></div>
            <br/>
            <div className="date"> <span className="data-name">PHONE : </span> <span className="data-value">{this.props.obj.phone}</span></div>
            <br/>
            <div className="date"> <span className="data-name">ROLE : </span> 

            {(this.state.isEditClicked) ?

              <span className="data-value">
                
                
                        <select className="ui dropdown data-value">
                          <option value="">{(this.props.obj.role.indexOf(",")>0)?this.props.obj.role.split(",")[0]+" & "+this.props.obj.role.split(",")[1]:this.props.obj.role}</option>
                          <option value="1">USER</option>
                          <option value="2">ADMIN</option>
                          <option value="3">USER & ADMIN</option>
                        </select>
              </span>
              :
              <span className="data-value">
                
                          {(this.props.obj.role.indexOf(",")>0)?this.props.obj.role.split(",")[0]+" & "+this.props.obj.role.split(",")[1]:this.props.obj.role}
              </span>
  }
            </div>
            <br/>
            <div className="date"> <span className="data-name">CALORIES PER DAY : </span> <span className="data-value">{this.props.obj.caloriesPerDay}</span></div>
            <br/>
            <div className="date"> <span className="data-name">USER STATUS : </span>

            {(this.state.isEditClicked) ?
             <span className="data-value">
               <select className="ui dropdown data-value">
                          <option value=""> {(this.props.obj.userStatus)?"ACTIVE":"INACTIVE"}</option>
                          <option value="1">ACTIVE</option>
                          <option value="2">INACTIVE</option>
                        </select>
               </span>

               :

               <span className="data-value">
               
                {(this.props.obj.userStatus)?"ACTIVE":"INACTIVE"}
                          
               </span>

            }
               </div>
        </div>
      </div>
      <div className="extra content">

      <div className="right floated delete" onClick = {this.deleteClicked}>
      <i className="trash icon"/>DELETE
      </div>

    {(this.state.isEditClicked) ?
      <div className="save edit" onClick = {this.saveClicked}>
      <i className="save icon"/>SAVE
      </div>
      :
      <div className="left edit" onClick = {this.editClicked}>
      <i className="edit icon"/>EDIT
      </div>
    }

    </div>
    </div>
  );
}
}

export default UserCard;
