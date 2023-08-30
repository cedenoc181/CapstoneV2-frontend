import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';




function NewUser() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

    function handleSignUp(e) {
        console.log(email, newPassword)
        e.preventDefault();
        fetch("http://localhost:9292/users", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            password: newPassword,
            email: email
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data,"you just created an account!")
             localStorage.setItem("jwt", data.token);
                      setEmail("");
                      setNewPassword("");
                      alert("signed up success");
                      navigate("/Login")
                      // setLog(true)
                      
          })
        }
  return (
    <div>
        <form onSubmit={handleSignUp}>
       <div className="text">
        <h4 align="center" >Sign Up</h4>
        </div>
    
       <input type="Email" placeholder="Email" className="mail" value={email} onChange={(e) => setEmail(e.target.value)}></input>

      <input type="password" placeholder="Enter password" className="pass" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}></input>

      <Button type="submit" className="submit" value="Sign Up" variant="outlined"
      color="primary"
      startIcon={ <PersonAddIcon />} />
    </form>
    </div>
  )
}

export default NewUser