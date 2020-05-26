import React, { Component } from "react";
import DeleteUser from "../API/DeleteUser";
import PutUserStatus from "../API/PutUserStatus";
import PutUserRole from "../API/PutUserRole";

class UserCard extends Component {
  state = {
    isEditClicked: false,
    role: "",
    isRoleChanged: false,
    status: "",
    isStatusChanged: false,
  };

  deleteClicked = () => {
    DeleteUser(this.props.obj.userId);
    alert("USER " + this.props.obj.userId + " IS DELETED");
    window.location.reload(); //to see result soon
  };

  editClicked = () => {
    this.setState({
      isEditClicked: true,
    });
  };

  saveClicked = () => {
    if (this.state.isRoleChanged) {
      PutUserRole(this.props.obj.username, this.state.role);
    }

    if (this.state.isStatusChanged) {
      PutUserStatus(this.props.obj.username, this.state.status);
    }

    this.setState({
      isEditClicked: false,
    });

    window.location.reload()
  };

  roleChanged = (event) => {
    this.setState({
      role: event.target.value,
      isRoleChanged: true,
    });
  };

  statusChanged = (event) => {
    this.setState({
      status: event.target.value,
      isStatusChanged: true,
    });
  };

  render() {
    return (
      <div className="ui small card">
        <div className="content">
          <div className="header">
            {this.props.obj.firstname.toUpperCase() +
              " " +
              this.props.obj.lastname.toUpperCase()}
          </div>
          <hr />
          <div className="data">
            <div className="date">
              {" "}
              <span className="data-name">USERNAME : </span>{" "}
              <span className="data-value">{this.props.obj.username}</span>
            </div>
            <br />
            <div className="date">
              {" "}
              <span className="data-name">EMAIL : </span>{" "}
              <span className="data-value">{this.props.obj.email}</span>
            </div>
            <br />
            <div className="date">
              {" "}
              <span className="data-name">PHONE : </span>{" "}
              <span className="data-value">{this.props.obj.phone}</span>
            </div>
            <br />
            <div className="date">
              {" "}
              <span className="data-name">ROLE : </span>
              {this.state.isEditClicked ? (
                <span className="data-value">
                  <select
                    className="ui dropdown data-value"
                    value={this.state.role}
                    onChange={this.roleChanged}
                  >
                    <option value="select">SELECT</option>
                    <option value="user">USER</option>
                    <option value="admin">ADMIN</option>
                    <option value="user,admin">USER & ADMIN</option>
                  </select>
                </span>
              ) : (
                <span className="data-value">
                  {this.props.obj.role.indexOf(",") > 0
                    ? this.props.obj.role.split(",")[0] +
                      " & " +
                      this.props.obj.role.split(",")[1]
                    : this.props.obj.role}
                </span>
              )}
            </div>
            <br />
            <div className="date">
              {" "}
              <span className="data-name">CALORIES PER DAY : </span>{" "}
              <span className="data-value">
                {this.props.obj.caloriesPerDay}
              </span>
            </div>
            <br />
            <div className="date">
              {" "}
              <span className="data-name">USER STATUS : </span>
              {this.state.isEditClicked ? (
                <span className="data-value">
                  <select
                    className="ui dropdown data-value"
                    value={this.state.status}
                    onChange={this.statusChanged}
                  >
                    <option value="select">SELECT</option>
                    <option value="true">ACTIVE</option>
                    <option value="false">INACTIVE</option>
                  </select>
                </span>
              ) : (
                <span className="data-value">
                  {this.props.obj.userStatus ? "ACTIVE" : "INACTIVE"}
                </span>
              )}
            </div>
          </div>
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
    );
  }
}

export default UserCard;
