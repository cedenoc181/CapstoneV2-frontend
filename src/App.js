import './App.css';
import { Routes } from "react-router-dom"
// import axios from "axios"
import Header from "./Header-folder/Header.jsx"
import Home from "./Home-folder/Home.jsx"
import Physical from "./Pt-folder/PhysicalTherapy.jsx"
import Exercises from "./Exercise-folder/Exercises.jsx";
import Article from "./Article-folder/Article.jsx";
import Settings from "./Account-folder/Settings.jsx";
import Appointments from "./Account-folder/Appointments.jsx"
import Login from "./Login-folder/Login.jsx";
import Faq from "./FAQ-folder/Faq.jsx";




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
      <Routes path="appointments" element={<Appointments />} />
      <Routes path="faq" element={<Faq />}/>
      <Routes path="/exercises" element={<Exercises />} />
      <Routes path="/providers" element={<Physical />} />
      <Routes path="/home" element={<Home />} />
      <Routes path="/settings" element={<Settings />} />
      <Routes path="/articles" element={<Article />} /> 
      <Routes path="/Login" element={<Login />} /> 

    </div>
  );
}

export default App;
