import React from 'react'
import { deleteAllCookies } from '../API/CookieOperations'

function Logout() {

  deleteAllCookies()

    return (
      <div className="logout">
        <h1>SUCESSFULLY LOGGED OUT</h1>
      </div>
    )
}

export default Logout
