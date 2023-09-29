import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
// import { useLocation, useParams } from "react-router-dom";

function AccountContactDetail({ activeUser }) {
  const ariaLabel = { "aria-label": "description" };

  const [userInput, setUserInput] = useState({
    first_name: activeUser.first_name,
    last_name: activeUser.last_name,
    city: activeUser.city,
    state: activeUser.state,
    address: activeUser.address,
    DOB: activeUser.DOB,
    phone_number: activeUser.phone_number,
    insurance: activeUser.insurance,
    insurance_member_id: activeUser.insurance_member_id,
  });

  const location = useLocation();
  const state = location.state;

  const selectedState = [
    { state: "Alabama", abbreviation: "AL", city: "Birmingham" },
    { state: "Alaska", abbreviation: "AK", city: "Anchorage" },
    { state: "Arizona", abbreviation: "AZ", city: "Phoenix" },
    { state: "Arkansas", abbreviation: "AR", city: "Little Rock" },
    { state: "California", abbreviation: "CA", city: "Los Angeles" },
    { state: "Colorado", abbreviation: "CO", city: "Denver" },
    { state: "Connecticut", abbreviation: "CT", city: "Hartford" },
    { state: "Delaware", abbreviation: "DE", city: "Dover" },
    { state: "Florida", abbreviation: "FL", city: "Miami" },
    { state: "Georgia", abbreviation: "GA", city: "Atlanta" },
    { state: "Hawaii", abbreviation: "HI", city: "Honolulu" },
    { state: "Idaho", abbreviation: "ID", city: "Boise" },
    { state: "Illinois", abbreviation: "IL", city: "Chicago" },
    { state: "Indiana", abbreviation: "IN", city: "Indianapolis" },
    { state: "Iowa", abbreviation: "IA", city: "Des Moines" },
    { state: "Kansas", abbreviation: "KS", city: "Wichita" },
    { state: "Kentucky", abbreviation: "KY", city: "Louisville" },
    { state: "Louisiana", abbreviation: "LA", city: "New Orleans" },
    { state: "Maine", abbreviation: "ME", city: "Portland" },
    { state: "Maryland", abbreviation: "MD", city: "Baltimore" },
    { state: "Massachusetts", abbreviation: "MA", city: "Boston" },
    { state: "Michigan", abbreviation: "MI", city: "Detroit" },
    { state: "Minnesota", abbreviation: "MN", city: "Minneapolis" },
    { state: "Mississippi", abbreviation: "MS", city: "Jackson" },
    { state: "Missouri", abbreviation: "MO", city: "Kansas City" },
    { state: "Montana", abbreviation: "MT", city: "Billings" },
    { state: "Nebraska", abbreviation: "NE", city: "Omaha" },
    { state: "Nevada", abbreviation: "NV", city: "Las Vegas" },
    { state: "New Hampshire", abbreviation: "NH", city: "Manchester" },
    { state: "New Jersey", abbreviation: "NJ", city: "Newark" },
    { state: "New Mexico", abbreviation: "NM", city: "Albuquerque" },
    { state: "New York", abbreviation: "NY", city: "New York City" },
    { state: "North Carolina", abbreviation: "NC", city: "Charlotte" },
    { state: "North Dakota", abbreviation: "ND", city: "Fargo" },
    { state: "Ohio", abbreviation: "OH", city: "Columbus" },
    { state: "Oklahoma", abbreviation: "OK", city: "Oklahoma City" },
    { state: "Oregon", abbreviation: "OR", city: "Portland" },
    { state: "Pennsylvania", abbreviation: "PA", city: "Philadelphia" },
    { state: "Rhode Island", abbreviation: "RI", city: "Providence" },
    { state: "South Carolina", abbreviation: "SC", city: "Columbia" },
    { state: "South Dakota", abbreviation: "SD", city: "Sioux Falls" },
    { state: "Tennessee", abbreviation: "TN", city: "Nashville" },
    { state: "Texas", abbreviation: "TX", city: "Houston" },
    { state: "Utah", abbreviation: "UT", city: "Salt Lake City" },
    { state: "Vermont", abbreviation: "VT", city: "Burlington" },
    { state: "Virginia", abbreviation: "VA", city: "Virginia Beach" },
    { state: "Washington", abbreviation: "WA", city: "Seattle" },
    { state: "West Virginia", abbreviation: "WV", city: "Charleston" },
    { state: "Wisconsin", abbreviation: "WI", city: "Milwaukee" },
    { state: "Wyoming", abbreviation: "WY", city: "Cheyenne" },
  ];

    function postToUser(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/users/${activeUser.id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            first_name: userInput.first_name,
            last_name: userInput.last_name,
            phone_number: userInput.phone_number,
            insurance: userInput.insurance,
            insurance_member_id: userInput.insurance_member_id,
            state: userInput.state,
            city: userInput.city,
            address: userInput.address,
            DOB: userInput.DOB,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "you just updated your account!");
            alert("Account updated");
          });


}

  console.log(selectedState);
  console.log(userInput);
  console.log(activeUser);
  

  return (
    <div>
        <form onSubmit={postToUser}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Input
          placeholder={activeUser.first_name === '' ? ("First Name") : (activeUser.first_name)}
          value={userInput.first_name}
          onChange={(e) =>
            setUserInput((prevInput) => ({
              ...prevInput,
              first_name: e.target.value,
            }))
          }
          inputProps={ariaLabel}
        />

        <Input
          placeholder={activeUser.last_name === '' ? ("Last Name") : (activeUser.last_name)}
          value={userInput.last_name}
          onChange={(e) =>
            setUserInput((prevInput) => ({
              ...prevInput,
              last_name: e.target.value,
            }))
          }
          inputProps={ariaLabel}
        />

        <div>
          <TextField
            id="outlined-select-state"
            select
            label={activeUser.state === '' ? ("State") : (activeUser.state)}
            helperText="Please select your state"
            value={userInput.state}
            onChange={(e) =>
              setUserInput((prevInput) => ({
                ...prevInput,
                state: e.target.value,
              }))
            }
          >
            {selectedState.map((option) => (
              <MenuItem key={option.state} value={option.state}>
                {option.abbreviation}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-select-city"
            select
            label={activeUser.city === '' ? ("City") : (activeUser.city)}
            helperText="Please select your city"
            value={userInput.city}
            onChange={(e) =>
              setUserInput((prevInput) => ({
                ...prevInput,
                city: e.target.value,
              }))
            }
          >
            {selectedState.map((option) => (
              <MenuItem key={option.state} value={option.city}>
                {option.city}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <Input
          placeholder={activeUser.address === '' ? ("Address") : (activeUser.address)}
          value={userInput.address}
          onChange={(e) =>
            setUserInput((prevInput) => ({
              ...prevInput,
              address: e.target.value,
            }))
          }
          inputProps={ariaLabel}
        />

        <Input
          placeholder={activeUser.DOB === '' ? ("Date of Birth") : (activeUser.DOB)}
          value={userInput.DOB}
          type= "date"
          onChange={(e) =>
            setUserInput((prevInput) => ({
              ...prevInput,
              DOB: e.target.value,
            }))
          }
          inputProps={ariaLabel}
        />
        <Input
          placeholder={activeUser.phone_number === '' ? ("Phone_number") : (activeUser.phone_number)}
          value={userInput.phone_number}
          type="tel"
          onChange={(e) =>
            setUserInput((prevInput) => ({
              ...prevInput,
              phone_number: e.target.value,
            }))
          }
          inputProps={ariaLabel}
        />
        <Input
          placeholder={activeUser.insurance === '' ? ("Insurance") : (activeUser.insurance)}
          value={userInput.insurance}
          onChange={(e) =>
            setUserInput((prevInput) => ({
              ...prevInput,
              insurance: e.target.value,
            }))
          }
          inputProps={ariaLabel}
        />
        <Input
          placeholder={activeUser.insurance_member_id === '' ? ("Insurance member ID") : (activeUser.insurance_member_id)}
          value={userInput.insurance_member_id}
          onChange={(e) =>
            setUserInput((prevInput) => ({
              ...prevInput,
              insurance_member_id: e.target.value,
            }))
          }
          inputProps={ariaLabel}
        />
        <Input
          disabled
          placeholder={activeUser.email}
          defaultValue={activeUser.email}
          inputProps={ariaLabel}
        />
      </Box>
      <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default AccountContactDetail;
