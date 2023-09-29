import React, {useState} from 'react';
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
// import { useLocation, useParams } from "react-router-dom";

function AccountContactDetail({activeUser}) {
    const ariaLabel = { 'aria-label': 'description' };

    // const [inputValueState, setInputValueState] = useState('');
    // const [inputValueCity, setInputValueCity] = useState('');
    const [userInput, setUserInput] = useState ({
        first_name: "",
        last_name: "",
        city: "",
        state: "", 
        address: "", 
        DOB: "", 
        phone_number: "", 
        insurance: "", 
        insurance_member_id: ""
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
    { state: "Wyoming", abbreviation: "WY", city: "Cheyenne" }
  ];


  console.log(selectedState);
  console.log(userInput);
  console.log(activeUser);
  console.log(userInput.first_name);
  console.log(userInput.city);
  console.log(userInput.state);

  return (
    <div>

<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Input
       placeholder= "First Name" 
      value={userInput.first_name}  
        onChange={e => setUserInput(prevInput => ({
            ...prevInput, 
            first_name: e.target.value
        }))}
    inputProps={ariaLabel}
     />


      <Input 
      placeholder="Last Name" 
      value={userInput.last_name} 
      onChange={e => setUserInput(prevInput => ({
        ...prevInput, 
        last_name: e.target.value
    }))}
      inputProps={ariaLabel} />

 <div>
        <TextField
          id="outlined-select-state"
          select
          label="Select State"
          helperText="Please select your state"
          value={userInput.state}
          onChange={e => setUserInput(prevInput => ({
            ...prevInput, 
            state: e.target.value
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
          label="Select City"
          helperText="Please select your city"
          value={userInput.city}
          onChange={e => setUserInput(prevInput => ({
            ...prevInput, 
            city: e.target.value
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
      placeholder="Address" 
      value={userInput.address} 
      onChange={e => setUserInput(prevInput => ({
        ...prevInput, 
        address: e.target.value
    }))}
      inputProps={ariaLabel} 
      />

      <Input 
      placeholder="Date of birth" 
      value={userInput.DOB} 
      onChange={e => setUserInput(prevInput => ({
        ...prevInput, 
        DOB: e.target.value
    }))}
      inputProps={ariaLabel} 
      />
      <Input 
      placeholder="Phone Number" 
      value={userInput.phone_number} 
      onChange={e => setUserInput(prevInput => ({
        ...prevInput, 
        phone_number: e.target.value
    }))}
      inputProps={ariaLabel}
       />
      <Input 
      placeholder="Insurane" 
      value={userInput.insurance} 
      onChange={e => setUserInput(prevInput => ({
        ...prevInput, 
        insurance: e.target.value
    }))}
      inputProps={ariaLabel} 
      />
      <Input 
      placeholder="Insurane member ID"
      value={userInput.insurance_member_id} 
      onChange={e => setUserInput(prevInput => ({
        ...prevInput, 
        insurance_member_id: e.target.value
    }))}
      inputProps={ariaLabel} />
      <Input
       disabled 
       placeholder={activeUser.email}
       defaultValue={activeUser.email} 
       inputProps={ariaLabel} />
    </Box>

    </div>
  )
}

export default AccountContactDetail