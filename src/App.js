import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./Header-folder/Header.jsx";
import Home from "./Home-folder/Home.jsx";
import Providers from "./Pt-folder/Providers.jsx";
import ProviderDetail from "./Pt-folder/ProviderDetail.jsx";
import AccountContactDetail from "./Account-folder/AccountContactDetail";
import Exercise from "./Exercise-folder/Exercise.jsx";
import Article from "./Article-folder/Article.jsx";
// import Settings from "./Account-folder/Settings.jsx";
// import Appointments from "./Account-folder/Appointments.jsx"
import Account from "./Account-folder/Account.jsx";
import Login from "./Login-folder/Login.jsx";
import Faq from "./FAQ-folder/Faq.jsx";
// import { RotatingSquare } from "react-loader-spinner";

function App() {
  const [user, setUser] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [therapist, setTherapist] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [searchPt, setSearchPt] = useState("");


  useEffect(() => {
  
    // exercise fetch
    console.log("now fetching exercises")
    axios.get("http://localhost:9292/exercises").then((response) => {
      console.log(response.data, "exercise data from fetch");
      setExercises(response.data);
    });

// Therapist fetch
console.log("now fetching therapist")
    axios.get("http://localhost:9292/physical_therapists").then((response) => {
      console.log(response.data, "therapist data from fetch");
      setTherapist(response.data);
    });

// fetching logged user account
console.log("now fetching current user")
fetch("http://localhost:9292/me", {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
}).then((response) => {
  if (response.ok) {
    response.json().then((data) => setUser(data.user));
  }
});

}, []);

  console.log(user, "now logged in");
  if (!user)
    return (
      <div className="login">
        <Login onLogin={setUser} />
      </div>
    );

  // onSearch functionn is passed down to the exercise component to relay user
  //  input to match database exercise name based on bodypart, target, name, equipment
  // based onn the filter function
  function searchGIF(searchKey) {
    setSearchKey(searchKey);
  }

  const filteredExerciseFromSearch = exercises.filter((exercise) => {
    return (
      (exercise.bodyPart && exercise.bodyPart.toLowerCase().includes(searchKey.toLowerCase())) ||
      (exercise.equipment && exercise.equipment.toLowerCase().includes(searchKey.toLowerCase())) ||
      (exercise.target && exercise.target.toLowerCase().includes(searchKey.toLowerCase())) ||
      (exercise.name && exercise.name.toLowerCase().includes(searchKey.toLowerCase()))
    );
  });

  // ptSearch function is passed down into providers component to get the user
  // input to match with database physical therapist names, zipcode specialization
  function ptSearch(searchPt) {
    setSearchPt(searchPt);
  }

  // validates if data exisit, then renders data value(string) into low case
  const filteredPtFromSearch = therapist.filter((pt) => {
    return (
      (pt.first_name && pt.first_name.toLowerCase().includes(searchPt.toLowerCase())) ||
      (pt.clinic_address && pt.clinic_address.toLowerCase().includes(searchPt.toLowerCase())) ||
      (pt.specialization && pt.specialization.toLowerCase().includes(searchPt.toLowerCase())) ||
      (pt.last_name && pt.last_name.toLowerCase().includes(searchPt.toLowerCase()))
    );
  });


  return (
    <div className="App">
      {/* should i keep setting and appointments here even tho its passed in accounts component */}
      <Header />
      <Routes>
        <Route
          path="/account"
          element={<Account activeUser={user} logOut={setUser} />}
        />
        {/* <Route path="/appointments" element={<Appointments activeUser={user}/>} /> */}
        <Route path="faq" element={<Faq activeUser={user} />} />
        <Route
          path="/exercises"
          element={
              <Exercise
              searchGIF={searchGIF}
              exercisesGIF={filteredExerciseFromSearch}
              activeUser={user}
            />
         
          }
        />

        <Route
          path="/providers"
          element={
            <Providers
              searchPt={ptSearch}
              therapist={filteredPtFromSearch}
              activeUser={user} 
        />
      }
      />  
      <Route 
      path="/account_detail/:id"
      element={<AccountContactDetail activeUser={user} />} 
      />
      
        <Route
          path="/physical_therapists/:id"
          element={<ProviderDetail activeUser={user} />}
        />
        <Route path="/home" element={<Home activeUser={user} />} />
        {/* <Route path="/settings" element={<Settings activeUser={user}/>} /> */}
        <Route path="/articles" element={<Article activeUser={user} />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;
