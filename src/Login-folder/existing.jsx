import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function exsisting({onLogin}) {

  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    console.log(username, password);
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
        <input type="submit" className="submit" value="login"></input>
      </form>
    </div>
  );
}

export default exsisting;
