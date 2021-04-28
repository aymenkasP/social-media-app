import React from 'react'
import useUser from '../../hooks/useUser'
import Suggestions from './Suggestions'
import User from './User'

export default function Sidebar() {

    const {user:{username,fullName,userId}}= useUser()

    console.log(username,fullName,userId)
    return (
        <div className='p-4'>
        
            <User username ={username} fullName={fullName} />
            <Suggestions userId={userId} />
        </div>
    )
}
