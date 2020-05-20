import React from "react";

function UserCard(props) {
  return (
    <div className="ui small card">
      <div className="content">
  <div className="header">{props.firstname+" "+props.lastname}</div>
  <hr/>
        <div className="data">
            <div className="date"> <span className="data-name">USERNAME : </span> <span className="data-value">{props.username}</span></div>
            <br/>
            <div className="date"> <span className="data-name">EMAIL : </span> <span className="data-value">{props.email}</span></div>
            <br/>
            <div className="date"> <span className="data-name">PHONE : </span> <span className="data-value">{props.phone}</span></div>
            <br/>
            <div className="date"> <span className="data-name">ROLE : </span> <span className="data-value">{props.role}</span></div>
            <br/>
            <div className="date"> <span className="data-name">CALORIES PER DAY : </span> <span className="data-value">{props.cpd}</span></div>
            <br/>
            <div className="date"> <span className="data-name">USER STATUS : </span> <span className="data-value">{props.status}</span></div>
        </div>
      </div>
      <div className="extra content">
      <span className="right floated delete">
      <i className="trash icon"/>
      DELETE
      </span>
      <span className="edit">
        <i className="pencil icon"/>
        EDIT STATUS
      </span>
    </div>
    </div>
  );
}

export default UserCard;
