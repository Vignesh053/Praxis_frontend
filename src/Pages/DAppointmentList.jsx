import React, { useState, useEffect } from 'react';
import '../Styles/DAppointmentList.css';
import { getAppointments } from '../Service/DoctorService';
import { useNavigate } from 'react-router-dom';

const DAppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const doctorId = 1; 
  const navigate = useNavigate();

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await getAppointments(doctorId);
      setAppointments(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleCreatePrescription = (appointment) => {
    navigate('/doctor/prescriptionform', {
      state: {
        patient: appointment.patient,
        reasonForVisit: appointment.reasonForVisit,
        appointmentId: appointment.id,
        
      },
    });
  };

  return (
    <div className="appointment-list">
      <h2>Appointments</h2>
      <h3>New Appointments</h3>
      <table className="appointment-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Reason for Visit</th>
            <th>Appointment Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments
            .filter((appointment) => appointment.appointmentStatus === 'Booked')
            .map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.patient.fullName}</td>
                <td>{appointment.reasonForVisit}</td>
                <td>{appointment.appointmentTime}</td>
                <td>
                  <button
                    className="create-prescription-btn"
                    onClick={() => handleCreatePrescription(appointment)}
                  >
                    Create Prescription
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <h3>Prescribed Appointments</h3>
      <table className="appointment-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Reason for Visit</th>
            <th>Appointment Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments
            .filter((appointment) => appointment.appointmentStatus === 'Completed')
            .map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.patient.fullName}</td>
                <td>{appointment.reasonForVisit}</td>
                <td>{appointment.appointmentTime}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DAppointmentList;