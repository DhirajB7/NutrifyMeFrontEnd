import React, { Component } from 'react'
import InputFeild from '../Template/InputFeild'
import OneLineGap from '../Template/OneLineGap'
import PostUser from '../API/PostUser'
import Message from '../Template/Message'

class SignUp extends Component {

  state = {
    firstname:'',
    lastname:'',
    phonenumber:'',
    email:'',
    cal:'',
    username:'',
    password:'',
    operationDone:false
  }


  firstnameFetch = (data) => {

   if(data.toString().match(/^[a-zA-Z]+$/)){

    this.setState({
      firstname:data
    })

   }else{
      alert("FIRST NAME SHOULD BE ONLY ALPHABETS")
   }

  }

  lastnameFetch = (data) => {

     if(data.toString().match(/^[a-zA-Z]+$/)){

    this.setState({
      lastname:data
    })

   }else{
      alert("LAST NAME SHOULD BE ONLY ALPHABETS")
   }

  }

  phonenumberFetch = (data) => {
     this.setState({
        phonenumber:data
      })
  }

  emailFetch = (data) => {
    if(data.toString().split("@").length===2){

      this.setState({
        email:data
      })
  
     }else{
        alert("EMAIL SHOULD HAVE ONE @")
     }
  }

  CaloriesFetch = (data) => {
    this.setState({
      cal:data
    })
  }

  usernameFetch = (data) => {
    this.setState({
      username:data
    })
  }

  passwordFetch = (data) => {
    this.setState({
      password:data
    })
  }

  submitClicked = () => {
    if(this.state.firstname.length>0 && this.state.firstname.length>0 && this.state.firstname.length>0 && this.state.firstname.length>0 && this.state.firstname.length>0 && this.state.firstname.length>0){
      PostUser(this.state)

      this.setState({
        operationDone:true
      })
      
    }else{
      alert("Kindly Check All Values.")
    }
  }



  render(){

    if(this.state.operationDone){

      return(

        <React.Fragment>

        <Message heading = "Data Added Sucssfully" message="You can log in now"/>

        <div className="signupLogin">

        <div className="ui button"><a href="/login">SIGN IN</a></div>

        </div>

        </React.Fragment>

      )

    }else{

    return (

        <div className="signup">

        <h1 className="ui center violet aligned header">SIGN UP</h1>

        <div className="ui form">

            <InputFeild label="First Name" type="text" placeholder="First Name" getValue={this.firstnameFetch}/>

            <InputFeild label="Last Name" type="text" placeholder="Last Name" getValue={this.lastnameFetch}/>

            <InputFeild label="Phone Number" type="number" placeholder="Phone Number" getValue={this.phonenumberFetch}/>

            <InputFeild label="Email" type="email" placeholder="Email" getValue={this.emailFetch}/>

            <InputFeild label="Calories Per Day" type="number" placeholder="Calories" getValue={this.CaloriesFetch}/>

            <InputFeild label="Username" type="text" placeholder="Username" getValue={this.usernameFetch}/>

            <InputFeild label="Password" type="password" placeholder="Password" getValue={this.passwordFetch}/>

            <button className="ui button" onClick={this.submitClicked}>Submit</button>
      </div>

        <OneLineGap/>
        
      <div className="ui button"><a href="/">BACK TO HOME PAGE</a></div>

      </div>

    )
    }
  }
}

export default SignUp
