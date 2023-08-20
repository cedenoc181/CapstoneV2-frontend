import React from 'react'
import Settings from "./Settings.jsx"
import Appointments from "./Appointments.jsx"

function Account({activeUser}) {

console.log(activeUser)

  return (
    <div>
        Account
    <Settings activeUser={activeUser}/>
    <Appointments activeUser={activeUser}/>
    </div>
  )
}

export default Account