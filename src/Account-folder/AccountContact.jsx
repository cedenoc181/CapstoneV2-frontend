import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AccountContact({ activeUser }) {



  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();
console.log(state);
  return (
    <div>
      <div>
        <h1>Contact Information</h1>
      </div>

{/* Clickable card, Account info input */}
      <div className="accountCard" onClick={ ()=> {
        navigate(`/account_detail/${ activeUser.id }`, { state: { activeUser } });
      }}>
        <ul>
          <li>{ activeUser.insurance }</li>
          <li>{ activeUser.phone_number }</li>
          <li>{ activeUser.email }</li>
        </ul>
      </div>
    </div>
  );
}

export default AccountContact;
