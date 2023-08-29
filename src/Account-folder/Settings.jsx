import React from 'react'
import { useNavigate } from "react-router-dom"

function Settings({activeUser, logOut}) {


      const navigate = useNavigate();
    function handleClick () {
      localStorage.removeItem('jwt');
      logOut(null);
      navigate('/Login');
  } 


    console.log(activeUser)
  return (
    <div>
<div onClick={handleClick}>
  Logout
</div>

    </div>
  )
}

export default Settings