import React, {useEffect, useState}from 'react'
import axios from "axios";
import Settings from "./Settings.jsx"
import Appointments from "./Appointments.jsx"
import AccountContact from './AccountContact.jsx'

function Account({activeUser, logOut}) {

  const [inputState, setInputState] = useState([]);


useEffect(() =>{
  const API_KEY = process.env.STATE_CITY_API_KEY
  
  console.log("now fetching states and city")
axios.get("https://us-states.p.rapidapi.com/basic", {
  headers: {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'us-states.p.rapidapi.com'
},
}).then((response) => {
  console.log(response.data, "states and city selection");
  setInputState(response.data);
});
}, []);

console.log(inputState);


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