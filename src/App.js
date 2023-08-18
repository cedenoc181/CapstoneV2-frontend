import './App.css';
import {useEffect, useState} from "react"
import { Routes, Route } from "react-router-dom"
import axios from "axios"
import Header from "./Header-folder/Header.jsx"
import Home from "./Home-folder/Home.jsx"
import Providers from "./Pt-folder/Providers.jsx"
import ProviderDetail from "./Pt-folder/ProviderDetail.jsx"
import Exercise from "./Exercise-folder/Exercise.jsx";
import Article from "./Article-folder/Article.jsx";
import Settings from "./Account-folder/Settings.jsx";
import Appointments from "./Account-folder/Appointments.jsx"
import Login from "./Login-folder/Login.jsx";
import Faq from "./FAQ-folder/Faq.jsx";




function App() {


const [user, setUser] = useState(null)
const [exercises, setExercises] = useState([]);
const [therapist, setTherapist] = useState([]);
const [searchKey, setSearchKey] = useState('')
const [searchPt, setSearchPt] = useState('')

useEffect(() => {
  axios.get("http://localhost:9292/exercises").then((response) => {
    console.log(response.data, "exercise data from fetch")
    setExercises(response.data);
  });
}, []);

useEffect(() => {
  axios.get("http://localhost:9292/physical_therapists").then((response) => {
    setTherapist(response.data);
  });
}, []);


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

  // onSearch functionn is passed down to the exercise component to relay user
  //  input to match database exercise name based on bodypart, target, name, equipment
  // based onn the filter function
  function onSearch (searchKey){
    setSearchKey(searchKey)
  }

  const filteredExerciseFromSearch = exercises.filter((exercise) => {
    return exercise.bodyPart.toLowerCase().includes(searchKey.toLowerCase()) +
    exercise.equipment.toLowerCase().includes(searchKey.toLowerCase()) +
    exercise.target.toLowerCase().includes(searchKey.toLowerCase()) +
    exercise.name.toLowerCase().includes(searchKey.toLowerCase()) 
  });


  // ptSearch function is passed down into providers component to get the user
  // input to match with database physical therapist names, zipcode specialization
  function ptSearch (searchPt){
    setSearchPt(searchPt)
    }

  const filteredPtFromSearch = therapist.filter((pt) => {
    return pt.first_name.toLowerCase().includes(searchPt.toLowerCase()) +
    pt.clinic_address.toLowerCase().includes(searchPt.toLowerCase()) +
    pt.specialization.toLowerCase().includes(searchPt.toLowerCase()) +
    pt.last_name.toLowerCase().includes(searchPt.toLowerCase()) 
  });



  return (
    <div className="App">

      <Header activeUser={user} logOut={setUser}/>
      <Routes>
          <Route path="appointments" element={<Appointments activeUser={user}/>} />
          <Route path="faq" element={<Faq activeUser={user}/>}/>
          <Route path="/exercises" element={<Exercise onSearch={onSearch} exercises={filteredExerciseFromSearch} activeUser={user}/>} />
          <Route path="/providers" element={<Providers therapist={filteredPtFromSearch} searchPt={ptSearch} activeUser={user}/>} />
          <Route path="/providers/:id" element={<ProviderDetail activeUser={user} />} />
          <Route path="/home" element={<Home activeUser={user}/>} />
          <Route path="/settings" element={<Settings activeUser={user}/>} />
          <Route path="/articles" element={<Article activeUser={user}/>} /> 
          <Route path="/Login" element={<Login />} /> 
      </Routes>
    </div>
  );
}

export default App;
