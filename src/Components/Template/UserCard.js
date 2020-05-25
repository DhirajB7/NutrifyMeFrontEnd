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
              <span className="data-value">
                
                        <select className="ui dropdown data-value">
                          <option value="">{(this.props.obj.role.indexOf(",")>0)?this.props.obj.role.split(",")[0]+" & "+this.props.obj.role.split(",")[1]:this.props.obj.role}</option>
                          <option value="1">USER</option>
                          <option value="2">ADMIN</option>
                          <option value="3">USER & ADMIN</option>
                        </select>
              </span>
            </div>
            <br/>
            <div className="date"> <span className="data-name">CALORIES PER DAY : </span> <span className="data-value">{this.props.obj.caloriesPerDay}</span></div>
            <br/>
            <div className="date"> <span className="data-name">USER STATUS : </span>
             <span className="data-value">
               <select className="ui dropdown data-value">
                          <option value=""> {(this.props.obj.userStatus)?"ACTIVE":"INACTIVE"}</option>
                          <option value="1">ACTIVE</option>
                          <option value="2">INACTIVE</option>
                        </select>
               </span>
               </div>
        </div>
      </div>
      <div className="extra content">

      <div className="right floated delete" onClick = {this.deleteClicked}>
      <i className="trash icon"/>DELETE
      </div>

    </div>
    </div>
  );
}
}

export default UserCard;
