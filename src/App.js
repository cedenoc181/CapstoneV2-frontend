import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./Header-folder/Header.jsx";
import Home from "./Home-folder/Home.jsx";
import Providers from "./Pt-folder/Providers.jsx";
import ProviderDetail from "./Pt-folder/ProviderDetail.jsx";
import Exercise from "./Exercise-folder/Exercise.jsx";
import Article from "./Article-folder/Article.jsx";
// import Settings from "./Account-folder/Settings.jsx";
// import Appointments from "./Account-folder/Appointments.jsx"
import Account from "./Account-folder/Account.jsx";
import Login from "./Login-folder/Login.jsx";
import Faq from "./FAQ-folder/Faq.jsx";
import { FallingLines } from "react-loader-spinner";

function App() {
  const [user, setUser] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [therapist, setTherapist] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [searchPt, setSearchPt] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const [isLoading3, setIsLoading3] = useState(true);

  useEffect(() => {
    if (isLoading === true) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2300);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isLoading2) {
      setTimeout(() => {
        setIsLoading2(false);
      }, 2300);
    }
  }, [isLoading2]);

  useEffect(() => {
    if (isLoading3) {
      setTimeout(() => {
        setIsLoading3(false);
      }, 2300);
    }
  }, [isLoading3]);

  useEffect(() => {
    axios.get("http://localhost:9292/exercises").then((response) => {
      console.log(response.data, "exercise data from fetch");
      setExercises(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:9292/physical_therapists").then((response) => {
      setTherapist(response.data);
    });
  }, []);

  useEffect(() => {
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
  console.log(user);
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
      exercise.bodyPart.toLowerCase().includes(searchKey.toLowerCase()) +
      exercise.equipment.toLowerCase().includes(searchKey.toLowerCase()) +
      exercise.target.toLowerCase().includes(searchKey.toLowerCase()) +
      exercise.name.toLowerCase().includes(searchKey.toLowerCase())
    );
  });

  // ptSearch function is passed down into providers component to get the user
  // input to match with database physical therapist names, zipcode specialization
  function ptSearch(searchPt) {
    setSearchPt(searchPt);
  }

  const filteredPtFromSearch = therapist.filter((pt) => {
    return (
      pt.first_name.toLowerCase().includes(searchPt.toLowerCase()) +
      pt.clinic_address.toLowerCase().includes(searchPt.toLowerCase()) +
      pt.specialization.toLowerCase().includes(searchPt.toLowerCase()) +
      pt.last_name.toLowerCase().includes(searchPt.toLowerCase())
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
            isLoading ? (
              <FallingLines
                color="#4fa94d"
                width="100"
                visible={true}
                ariaLabel="falling-lines-loading"
              />
            ) : (
              <Exercise
                searchGIF={searchGIF}
                exercisesGIF={filteredExerciseFromSearch}
                activeUser={user}
              />
            )
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
          path="/providers/:id"
          element={<ProviderDetail activeUser={user} />}
        />
        <Route path="/home" element={<Home activeUser={user} />} />
        {/* <Route path="/settings" element={<Settings activeUser={user}/>} /> */}
        <Route path="/articles" element={<Article activeUser={user} />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
