import React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

function ProviderCalendar() {
  const [dataValue, setDataValue] = React.useState(dayjs(new Date()));

  const isWeekend = (date) => {
    const day = date.day();
    return day === 0 || day === 6; // Sunday (0) and Saturday (6)
  };

  return (
    <div>
      <h1>Select an appointment date</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          orientation="landscape"
          onChange={(newValue) => {
            console.log(newValue.$d.getDate());
            setDataValue(newValue);
          }}
          shouldDisableDate={isWeekend}
          value={dataValue}
        />
      </LocalizationProvider>
    </div>
  );
}

export default ProviderCalendar;
