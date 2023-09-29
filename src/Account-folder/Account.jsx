import React from 'react'
// import axios from "axios";
import Settings from "./Settings.jsx"
import Appointments from "./Appointments.jsx"
import AccountContact from './AccountContact.jsx'

function Account({activeUser, logOut}) {

console.log(activeUser)

  return (
    <div>
       <h1>{activeUser.first_name} {activeUser.last_name}</h1> 

    <AccountContact activeUser={activeUser}/>
    <Settings activeUser={activeUser} logOut={logOut}/>
    <Appointments activeUser={activeUser}/>
    </div>
  )
}

export default Account