import React, { Component } from "react";
import InputFeild from "../Template/InputFeild";
import OneLineGap from "../Template/OneLineGap";
import UsernamePassword from "../API/UsernamePassword";
import { Redirect } from "react-router-dom";



class Login extends Component {
  state = {
    username: "",
    password: "",
    token: "",
    isUserLoggedIn: false,
    isAdminLoggedIn: false,
    redirect: false
  };

  usernameFetch = (data) => {
    this.setState({
      username: data,
    });
  };

  passwordFetch = (data) => {
    this.setState({
      password: data,
    });
  };

  validateUserNameAndPassword = (username, password) => {
    if (!(username === "" || password === "")) {
      let data = UsernamePassword(username, password);
      data.then((a) => {
        if (JSON.stringify(a.role).includes("ADMIN")) {
          this.setState({
            isAdminLoggedIn: true,
            token: a.authorization.toString(),
            redirect: true,
          });
        } else {
          this.setState({
            isUserLoggedIn: true,
            token: a.authorization.toString(),
            redirect: true,
          });
        }


       
        document.cookie = "Authorization="+this.state.token+"#"
        document.cookie = "Username="+this.state.username+"#"
        document.cookie = "isUserLoggedIn="+this.state.isUserLoggedIn+"#"
        document.cookie = "isAdminLoggedIn="+this.state.isAdminLoggedIn+"#"
      });
    } else {
      alert("WRONG USERNAME OR WORNG PASSWORD, TRY AGAIN.");
    }
  };

  loginClicked = () => {
    this.validateUserNameAndPassword(this.state.username, this.state.password);
  };

  render() {
    if (this.state.redirect && this.state.isAdminLoggedIn) {
      return <Redirect to="/users" />;
    } else if(this.state.redirect && this.state.isUserLoggedIn){
      return <Redirect to="/home" />;
    }else {
      return (
        <div className="login">
          <div className="ui form">

          <h1 className="ui center violet aligned header">SIGN IN</h1>


            <InputFeild
              label="Username"
              type="text"
              placeholder="username"
              getValue={this.usernameFetch}
            />

            <InputFeild
              label="Password"
              type="password"
              placeholder="Password"
              getValue={this.passwordFetch}
            />

            <button className="ui button" onClick={this.loginClicked}>
              SIGN IN
            </button>
          </div>

          <OneLineGap />

          <div className="ui button">
            <a href="/">BACK TO HOME PAGE</a>
          </div>
        </div>
      );
    }
  }
}

export default Login;
