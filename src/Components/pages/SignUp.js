import React, { Component } from 'react'
import InputFeild from '../Template/InputFeild'
import OneLineGap from '../Template/OneLineGap'
import PostUser from '../API/PostUser'
import Message from '../Template/Message'
import VerifyUsername from '../API/VerifyUsername'


class SignUp extends Component {

  state = {
    firstname:'',
    lastname:'',
    phonenumber:'',
    email:'',
    cal:'',
    username:'',
    password:'',
    operationDone:false,
    enteredUserName:'',
    finalcheck:false
  }


  firstnameFetch = (data) => {

  

    this.setState({
      firstname:data
    })


  }

  lastnameFetch = (data) => {

     
    this.setState({
      lastname:data
    })

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

  VerifyUsername(data)

  this.setState({
    enteredUserName:data
  })

  }

  passwordFetch = (data) => {

    this.setState({
      password:data
    })
  }

  verifyClicked = () => {

    if(localStorage.getItem('username')==='true'){

      alert("USER NAME ALREADY EXIST")
      
     }else{
   
       this.setState({
         username:this.state.enteredUserName,
         finalcheck:true
       })

       localStorage.clear()

        alert("USERNAME ACCEPTED. YOU CAN SUBMIT")
     }
    }

    submitClicked = () => {
      if(this.state.firstname.length>0 && this.state.lastname.length>0 && this.state.phonenumber.length>0 && this.state.email.length>0 && this.state.cal.length>0 && this.state.username.length>0 && this.state.password.length>0){
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

            <InputFeild label="Username" type="text" placeholder="Username" getValue={this.usernameFetch} />

           <InputFeild label="Password" type="password" placeholder="Password" getValue={this.passwordFetch}/>

           {(this.state.finalcheck) ? <button className="ui button" onClick={this.submitClicked}>SUBMIT</button> : <button className="ui button" onClick={this.verifyClicked}>VERIFY</button>}
      </div>

        <OneLineGap/>
        
      <div className="ui button"><a href="/">BACK TO HOME PAGE</a></div>

      </div>

    )
    }
  }
}

export default SignUp
