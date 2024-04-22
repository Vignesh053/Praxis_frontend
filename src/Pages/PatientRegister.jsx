import React, { useState } from 'react';
import { createPatient } from '../Service/PatientService';
import '../Styles/PatientRegister.css'
import { useNavigate } from 'react-router-dom';

const PatientRegister = () => {
    const navigate = useNavigate();
  const [patient, setPatient] = useState({
    fullName: '',
    dateOfBirth: '',
    contactNumber: '',
    medicalHistory: '',
  });

  const handleChange = (event) => {
    setPatient({ ...patient, [event.target.name]: event.target.value });
  };

  const userId = 1;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('the data to send is' + patient)
    try {
      const response = await createPatient(patient, userId);
      console.log('Registration successful', response);
      if (response.status === 201) {
        console.log('Patient created successfully', response.data);
        alert('Patient Registered successfully');
        navigate('/patient');
      } else {
        console.error('Unexpected status code:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className='patient-register'>
      <h2>Register Patient</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={patient.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={patient.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={patient.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="medicalHistory">Medical History</label>
          <textarea
            rows={4}
            name="medicalHistory"
            value={patient.medicalHistory}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default PatientRegister;