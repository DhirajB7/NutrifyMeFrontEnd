import React from 'react'
import { deleteAllCookies } from '../API/CookieOperations'
import { Redirect } from 'react-router-dom';

function Logout() {

  deleteAllCookies()


  return (

    <Redirect to="/login" />
     
    )
}

export default Logout