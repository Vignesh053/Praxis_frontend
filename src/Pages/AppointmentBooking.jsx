import React, { useState, useEffect } from "react";
import { bookAppointment, getDocs } from "../Service/PatientService";
import "../Styles/AppointmentBooking.css";

import { useNavigate } from "react-router-dom";


function AppointmentBooking() {
  

  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [reasonForVisit, setReasonForVisit] = useState("");
  const [appointmentStatus] = useState("Booked");

  const fetchDocs = async () => {
    const response = await getDocs();
    console.log(response.data);
    setDoctors(response.data);
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const appointmentData = {
      doctorId: selectedDoctorId,
      patientId: 1,
      appointmentTime,
      reasonForVisit,
      appointmentStatus,
    };

    try {
      const response = await bookAppointment(appointmentData);
      if (response.status === 201) {
        alert("appointment booked successfully");
        navigate("/patient");
      }
    } catch (error) {
      console.error(error);
      alert("sorry, registration failed, please try later");
    }
  };

  return (
    <div className="appointment-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="doctor">Doctor:</label>
          <select
            id="doctor"
            value={selectedDoctorId}
            onChange={(e) => setSelectedDoctorId(e.target.value)}
          >
            <option value="">Select a doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.fullName} - {doctor.specialization}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="appointmentTime">Appointment Time:</label>
          <input
            id="appointmentTime"
            type="datetime-local"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reasonForVisit">Reason for Visit:</label>
          <textarea
            id="reasonForVisit"
            value={reasonForVisit}
            onChange={(e) => setReasonForVisit(e.target.value)}
          />
        </div>
        <button type="submit" className="appointment-submit">
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default AppointmentBooking;
