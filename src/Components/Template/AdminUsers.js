import React, { Component } from "react";
import GetAllUsers from "../API/GetAllUsers";
import UserCardsThree from "./UserCardsThree";

class AdminUsers extends Component {
    state = {
        userData: []
      };
    
      componentDidMount() {
    
        let data = GetAllUsers();
    
        data.then((a) => {
          a.data.forEach((element) => {
            this.setState({
              userData: this.state.userData.concat(element)
            });
          });
        });
      }
    
     
    
      render() {
    
        return (
          <div>
    
            <div className="cards-display">
              
              <UserCardsThree userDataArray = {(this.state.userData.length===parseInt(localStorage.getItem("usersLength")))?this.state.userData:"loading"}/>
              
            </div>
          </div>
        )
        
      }
}
export default AdminUsers