import React, { Component } from 'react'
import InputFeild from '../Template/InputFeild'
import OneLineGap from '../Template/OneLineGap'
import UsernamePassword from '../API/UsernamePassword'

class Login extends Component {

  state = {
    username:'',
    password:'',
    token:'',
    isUserLoggedIn:false,
    isAdminLoggedIn:false,
    redirect:false
  }

  usernameFetch = (data) =>{
    this.setState({
      username:data
    })
  }

  passwordFetch = (data) =>{
   this.setState({
     password:data
   })
  }

  validateUserNameAndPassword = (username,password) =>{

          if(!(username==='' || password==='')){

           let data = UsernamePassword(username,password)
           data.then((a)=>{

             this.setState(
               {
                 token:a.authorization.toString(),
               }
             )

             if(JSON.stringify(a.role).includes("ADMIN")){

                this.setState({
                  isAdminLoggedIn:true
                })

             }else{

              this.setState({
                isUserLoggedIn:true
              })

             }

             this.setState({
              redirect:true
            })
            
           }) 

          }else{
            alert("WRONG USERNAME OR WORNG PASSWORD, TRY AGAIN.")
          }
   
  }

  loginClicked = () =>{
    this.validateUserNameAndPassword(this.state.username,this.state.password)
  }

  componentDidUpdate(){
    
     if(this.state.token.length > 10){
       document.cookie = "Authorization="+this.state.token+"#"
       document.cookie = "Username="+this.state.username+"#"
       document.cookie = "isUserLoggedIn="+this.state.isUserLoggedIn+"#"
       document.cookie = "isAdminLoggedIn="+this.state.isAdminLoggedIn+"#"
     }

  }

  render(){

    return(
       
        <div className="login">

        <div className="ui form">
        
        <InputFeild label="Username" type="text" placeholder="username" getValue={this.usernameFetch}/>

        <InputFeild label="Password" type="password" placeholder="Password" getValue={this.passwordFetch}/>

        <button className="ui button" onClick={this.loginClicked}>LOGIN</button>

      </div>

      <OneLineGap/>

      <div className="ui button"><a href="/">{(this.state.redirect) ? "LOGIN SUCESSFULL CLICK HERE" : "BACK TO HOME PAGE"}</a></div>
      
      </div>

    )
    }
}

export default Login