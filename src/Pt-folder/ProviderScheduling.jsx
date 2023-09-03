import React, {useState} from 'react'

function ProviderScheduling({therapist, activeUser}) {

console.log(therapist)
console.log(activeUser)
const [selectedTime, setSelectedTime] = useState(null);

// Function to generate time slots at 15-minute intervals
const generateTimeSlots = () => {
  const startTime = new Date();
  startTime.setHours(8, 0, 0); // Start at 8:00 AM
  const endTime = new Date();
  endTime.setHours(17, 0, 0); // End at 5:00 PM

  const timeSlotDuration = 30; // 30 minutes
  const timeSlots = [];

  while (startTime < endTime) {
    const slotTime = new Date(startTime);
    timeSlots.push(slotTime);

    startTime.setMinutes(startTime.getMinutes() + timeSlotDuration);
  }

  return timeSlots;
};

const timeSlots = generateTimeSlots();

const handleTimeSlotClick = (time) => {
  setSelectedTime(time);
  // You can perform additional actions here, e.g., save the selected time to state or send it to the server.
  console.log(selectedTime)
};

return (
  <div>
    <h1>Select an Appointment Time</h1>
    <div className="time-slot-container">
      {timeSlots.map((time, index) => (
        <div
          key={index}
          className={`time-slot ${selectedTime && selectedTime.getTime() === time.getTime() ? 'selected' : ''}`}
          onClick={() => handleTimeSlotClick(time)}
        >
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      ))}
    </div>
    {selectedTime && <p>You selected the time: {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>}
  </div>
);
}

export default ProviderScheduling