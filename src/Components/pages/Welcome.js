import React, { Component } from 'react'
import PreLoader from '../Template/PreLoader'
import { getValueFromCookie } from '../API/CookieOperations'
import UserOperationOptions from '../Template/UserOperationOptions'
import AdminOperationOptions from '../Template/AdminOperationOptions'
import PageNotFound from './PageNotFound'

class Welcome extends Component {

    state = {
        isDataReady:false
    }

    dataReady = () => {
        if(document.cookie.length>10){
            return true
        }else{
            window.location.reload() //important else page will be stuck in preloader
            return false
        }
    }


    render() {

        if(this.dataReady()){
            
           const isUser = getValueFromCookie("isUserLoggedIn")==="true";

           const isAdmin = getValueFromCookie("isAdminLoggedIn")==="true";

          if(isUser){

           return <UserOperationOptions/>

          }else if(isAdmin){

           return  <AdminOperationOptions/>

          }else{

           return <PageNotFound/>

          }
        }else{
            return(
                <PreLoader/>
            )
        }

       
    }
}

export default Welcome