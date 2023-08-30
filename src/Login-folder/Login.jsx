import React, {useState} from 'react';
import NewUser from "./NewUser.jsx";
import ExistingUser from "./Existing.jsx";



function Login({onLogin}) {

const [log, setLog] = useState(true)

function handleClick() {
    setLog(!log)
   }

  return (
    <div>
{log ? 
(<ExistingUser onLogin={onLogin}/>)
: 
(<NewUser/> )
}

<p className="accountOnclick" align="center" onClick={handleClick}>{log ? "Don't have an account? Sign up!" : "Have an account? Login!" }</p>
    </div>
  )
}

export default Login