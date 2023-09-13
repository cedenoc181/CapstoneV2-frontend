import React, {useState} from 'react';
import "./ProviderCalendar.css"
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

function ProviderCalendar({appointmentDate}) {
  const [dataValue, setDataValue] = React.useState(dayjs(new Date()));
  const [selectedDate, setSelectedDate] = useState(``)



  const currentDate = dayjs();
  const minDate = currentDate; // Set the minimum date to the current date
  const maxDate = currentDate.add(365, 'day'); // Set the maximum date to 365 days from the current date

  const isWeekend = (date) => {
    const day = date.day();
    return day === 0 || day === 6; // Sunday (0) and Saturday (6)
  };


 
  console.log("date selected",selectedDate);
  appointmentDate(selectedDate);

  return (
    <div>
      <h1>Select an appointment date</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          orientation="portrait"
          slotProps={{
            actionBar: {
                actions: ['today'],
              },
          }}
          onChange={(newValue) => {
            // console.log(newValue.$d.getDate());
            setSelectedDate(`${newValue.$d.getMonth() + 1}/${newValue.$d.getDate()}/${newValue.$d.getFullYear()}`); //
            setDataValue(newValue);
          }}
          shouldDisableDate={isWeekend}
          value={dataValue}
          minDate={minDate}
          maxDate={maxDate}
        />
      </LocalizationProvider>
    </div>
  );
}

export default ProviderCalendar;
