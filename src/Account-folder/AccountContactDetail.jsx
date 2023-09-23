import React from 'react';
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import { useLocation, useParams } from "react-router-dom";

function AccountContactDetail({activeUser}) {
    const ariaLabel = { 'aria-label': 'description' };

  const location = useLocation();
  const state = location.state;


  const selectedState = [
    {
      value: 'Alabama',
      label: 'AL',
    },
    {
      value: 'Alaska',
      label: 'AK',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];


console.log(selectedState);
  console.log(state);
  console.log(activeUser);

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
      <Input placeholder= "First Name" inputProps={ariaLabel} />
      <Input placeholder="Last Name" inputProps={ariaLabel} />
      <Input placeholder="State" inputProps={ariaLabel} />
      <Input placeholder="City" inputProps={ariaLabel} />
      <Input placeholder="Address" inputProps={ariaLabel} />
      <Input placeholder="Date of birth" inputProps={ariaLabel} />
      <Input placeholder="Phone Number" inputProps={ariaLabel} />
      <Input placeholder="Insurane" inputProps={ariaLabel} />
      <Input placeholder="Insurane member ID" inputProps={ariaLabel} />
      <Input disabled defaultValue={activeUser.email} inputProps={ariaLabel} />
      
    </Box>

    </div>
  )
}

export default AccountContactDetail