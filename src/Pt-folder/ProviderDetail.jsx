import {React, useState, useEffect} from 'react'
import { useLocation, useParams } from "react-router-dom";
import ProviderReviews from './ProviderReviews';
import ProviderScheduling from "./ProviderScheduling"



function ProviderDetail({activeUser}) {

  const location = useLocation();
  const state = location.state;

  console.log(state);
  console.log(activeUser);
  console.log(state.pt.reviews);

  const param = useParams();
    console.log(param.id);
  
  const [therapistData, setTherapistData] = useState({});

  useEffect(() => {
    if (!state) {
      fetch(`http://localhost:9292/physical_therapists/${param.id}`)
        .then((res) => res.json())
        .then((data) => setTherapistData(data));
    }
  },);

  console.log(therapistData === null);
  console.log(state.pt)


  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
   
   today = mm + '/' + dd + '/' + yyyy;

  return (
    <div>
            {/* load pt details */}
            <div className="meetPt">Meet Dr.{state.pt.first_name} {state.pt.last_name}</div>
            <div className="pt-img-con">
        <img className="ptImg" src={state.pt.profile_picture} alt={state.pt.last_name} />
        <h4 className="aboutMe">Get to know me!</h4>
        <div className="ptAbout"> "{state.pt.about_me}"   <br/> <span className="aboutCred">-Dr.{state.pt.last_name}</span></div>
      </div>
      <div className="pt-info">
        <div className="ptFirstLastName">
          Dr. {state.pt.first_name} {state.pt.last_name}, {state.pt.title}
        </div>
        <div className="pt-rating">⭐ {state.pt.rating}<span className="totalReviews">-{state.pt.reviews.length} Reviews</span></div>
        <div><span className="ptSpec">Specializes in 📁:</span> {state.pt.specialization}</div>
        <div><span className="ptSpec">Languges spoken:</span> English and {state.pt.languages_spoken}</div>
        <div><span className="ptNetwork">Address 🏥:</span>  {state.pt.clinic_address}</div>
        <div><span className="ptNetwork">Network 🌐:</span> {state.pt.insurance_network}.</div>
        <div><span className="ptStudies">Studies 🏫:</span> {state.pt.post_grad__education}.</div>
      </div>

      <ProviderScheduling therapist={state.pt} activeUser={activeUser}/>
      <ProviderReviews therapist={state.pt} activeUser={activeUser}/>
    </div>
  )
}

export default ProviderDetail