import React from 'react'
import { deleteAllCookies } from '../API/CookieOperations'
import { Redirect } from 'react-router-dom';

function Logout() {

  deleteAllCookies()
  localStorage.clear()

  alert("SUCESSFULLY LOGGED OUT")


  return (

    <Redirect to="/login" />
     
    )
}

export default Logout