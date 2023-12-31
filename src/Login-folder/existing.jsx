import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

function Exsisting({onLogin}) {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    console.log(email, password);
    e.preventDefault();
    fetch("http://localhost:9292/auth/login/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(email, "you just attempted to login", data);
        localStorage.setItem("jwt", data.token);
        navigate("/home");
        onLogin(data.user);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="text">
          <h4 align="center">Login</h4>
        </div>

        <input
          type="text"
          className="user"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <input
          type="password"
          className="pass"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <Button type="submit" className="submit" value="login" variant="outlined"
      color="primary"
      startIcon={<LoginIcon />} />
      </form>
    </div>
  );
}

export default Exsisting;
