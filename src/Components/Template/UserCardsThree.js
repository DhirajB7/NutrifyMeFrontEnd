import React from 'react'
import UserCard from './UserCard'

function UserCardsThree() {
    return (
        <div div className = "ui three cards">

            <UserCard 
            firstname = "first" 
            lastname = "last" 
            username = "fl789"
            email = "fl@abc.com"
            phone = "123456"
            role = "ADMIN,USER"
            cpd = "34.456"
            status = "active"
            />

            <UserCard 
            firstname = "first" 
            lastname = "last" 
            username = "fl789"
            email = "fl@abc.com"
            phone = "123456"
            role = "ADMIN,USER"
            cpd = "34.456"
            status = "active"
            />

            <UserCard 
            firstname = "first" 
            lastname = "last" 
            username = "fl789"
            email = "fl@abc.com"
            phone = "123456"
            role = "ADMIN,USER"
            cpd = "34.456"
            status = "active"
            />
            
        </div>
    )
}

export default UserCardsThree
