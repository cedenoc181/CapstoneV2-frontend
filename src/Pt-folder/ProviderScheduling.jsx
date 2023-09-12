import React, { useState } from "react";

function ProviderScheduling({ therapist, activeUser }) {
  console.log(therapist);
  console.log(activeUser);

  const [selectedTime, setSelectedTime] = useState(null);
  const [appointment, setAppointment] = useState({});
  const [timeSlots, setTimeSlots] = useState(generateTimeSlots());
  const [isPending, setIsPending] = useState(false);
  const [claim, setClaim] = useState("");
  const [clinic, setClinic] = useState(false);
  const [homeVisit, setHomeVisit] = useState(false);
  const [telemedicine, setTelemedicine] = useState(false);

  // Function to generate time slots at 30-minute intervals
  function generateTimeSlots() {
    const startTime = new Date();
    startTime.setHours(7, 0, 0); // Start at 7:00 AM
    const endTime = new Date();
    endTime.setHours(19, 0, 0); // End at 7:00 PM

    const timeSlotDuration = 30; // 30 minutes
    const slots = [];
    console.log(slots)

    while (startTime < endTime) {
      slots.push({
        time: new Date(startTime),
        available: true, // Initially, all time slots are available
      });

      startTime.setMinutes(startTime.getMinutes() + timeSlotDuration);
    }

    return slots;

  }

 

  const handleTimeSlotClick = (index) => {
    if (timeSlots[index].available) {
      setSelectedTime(timeSlots[index].time);

      // Update time slot availability
      const updatedTimeSlots = timeSlots.map((slot, i) => {
        return i === index ? { ...slot, available: false } : { ...slot, available: true };
      });
      
      setTimeSlots(updatedTimeSlots);
      console.log(timeSlots[index]);
      console.log(updatedTimeSlots);
    }
  };

  console.log(selectedTime);

  const handleClinicChange = () => {
    setTelemedicine(false);
    setHomeVisit(false);
    setClinic(true);
  };

  const handleHomeVisitChange = () => {
    setHomeVisit(true);
    setTelemedicine(false);
    setClinic(false);
  };

  const handleTelemedicineChange = () => {
    setTelemedicine(true);
    setHomeVisit(false);
    setClinic(false);
  };


  function handleSubmit(e) {
    e.preventDefault();

    setIsPending(true);
    fetch("http://localhost:9292/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: activeUser.id,
        physical_therapist_id: therapist.id,
        case: claim,
        home_visit: homeVisit,
        telemedicine: telemedicine, 
        scheduled: selectedTime,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // if (data.success) {
        //   console.log(data.success, "data from post request");
        //   setAppointment(data);
        //   console.log(appointment, "appointment created");
        // } else {
        //   console.log(data.error, "data error catcher");
        // }
        setAppointment(data);
        setIsPending(false);
        setHomeVisit(false);
        setClinic(false);
        setTelemedicine(false);
        setClaim("");
        alert("Appointment successflly created, We will see you soon!");
        // navigate("/Account")
      });
  }
 console.log("Appointment created for", appointment);
console.log(claim);
console.log(selectedTime)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Select an Appointment Time</h1>
        <div className="time-slot-container">
          {timeSlots.map((slot, index) => (
            <div
              key={index}
              className={`time-slot ${!slot.available ? "unavailable" : ""}`}
              onClick={() => handleTimeSlotClick(index)}
            >
              {slot.time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          ))}
        </div>
        {selectedTime && (
          <p>
            You selected the time:{" "}
            {selectedTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        )}
        <label className="claimLabel">Brief description detailing visit:</label>
        <br />
        <div className="box">
          <textarea
            type="text"
            value={claim}
            onChange={(e) => setClaim(e.target.value)}
            placeholder="Pain, Injury, Discomfort..."
            className="claimInput"
          />
        </div>
        <div>&nbsp;</div>

        <label className="inqClinic">Check for Clinic Inquiry: </label>
        <div className="box">
          <input
            className="inqClinicInput"
            type="checkbox"
            checked={clinic}
            onChange={handleClinicChange}
          />
        </div>
        <br />


        <label className="inqHome">Check for Home Visit Inquiry: </label>
        <div className="box">
          <input
            className="inqHomeInput"
            type="checkbox"
            checked={homeVisit}
            onChange={handleHomeVisitChange}
          />
        </div>
        <br />

        <label className="inqTele">Check for Telemedicine Inquiry: </label>
        <div className="box">
          <input
            className="inqTeleInput"
            type="checkbox"
            checked={telemedicine}
            onChange={handleTelemedicineChange}
          />
        </div>

        <div className="box">
          {!isPending && (
            <button className="appbutton" onClick={handleSubmit}>
              {" "}
              Create Appointment!
            </button>
          )}
          {isPending && (
            <button className="appbutton" disabled>
              {" "}
              Creating...
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ProviderScheduling;
