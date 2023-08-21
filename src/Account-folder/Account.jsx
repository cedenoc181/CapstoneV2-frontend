import React from 'react'
import Settings from "./Settings.jsx"
import Appointments from "./Appointments.jsx"

function Account({activeUser, logOut}) {

console.log(activeUser)

  return (
    <div>
        Account
    <Settings activeUser={activeUser} logOut={logOut}/>
    <Appointments activeUser={activeUser}/>
    </div>
  )
}

export default Account