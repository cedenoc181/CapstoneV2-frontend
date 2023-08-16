import './App.css';
import { Routes } from "react-router-dom"
// import axios from "axios"
import Header from "./Header-folder/Header.jsx"
import Home from "./Home-folder/Home.jsx"
import Physical from "./Pt-folder/PhysicalTherapy.jsx"
import Exercises from "./Exercise-folder/exercises.jsx";
import Article from "./Article-folder/Article.jsx";
import Account from "./Account-folder/Account.jsx";
import Login from "./Login-folder/Login.jsx";




function App() {







  useEffect(() => {
    fetch("http://localhost:9292/me",{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((response) => {
        if (response.ok) {
      response.json().then((data) => setUser(data.user));
         }
   });
  }, []);
console.log(user)
  if (!user) 
  return(
  <div className="login"><Login onLogin={setUser}/></div>
  );






  return (
    <div className="App">

      <Header />
      <Routes>Login up page</Routes>
      <Routes>sign up page</Routes>
      <Routes>Physical Therapist page</Routes>
      <Routes>Exercises page</Routes>
      <Routes path="/home" element={<Home />}>Home page</Routes>
      <Routes>Account</Routes>
      <Routes>Article page</Routes>

    </div>
  );
}

export default App;
