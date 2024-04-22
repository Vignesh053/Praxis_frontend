import React, { useState } from "react";

import "../Styles/DoctorRegistration.css";
import { registerDoc } from "../Service/DoctorService";
import { useNavigate } from "react-router-dom";

const DoctorRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    specialization: "",
  });

  const userId = 2;

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await registerDoc(formData, userId);

      if (response.status === 201) {
        console.log("Doctor created successfully", response.data);
        alert("Doctor Registered successfully");
        navigate("/doctor");
      } else {
        console.error("Unexpected status code:", response.status);
        return null;
      }
    } catch (error) {
      console.error("Error registering doctor:", error);
    }
  };

  return (
    <div className="doctor-registration">
      <h2>Register as a Doctor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialization">Specialization</label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default DoctorRegistration;
