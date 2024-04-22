import React, { useState, useEffect } from "react";
import { getPrescription } from "../Service/PatientService";
import "../Styles/PatientPrescription.css";
import { useNavigate } from "react-router-dom";

const PatientPrescription = () => {
  const [prescription, setPrescription] = useState(null);
  
  const navigate = useNavigate();
  let patientId = 1;

  useEffect(() => {
    fetchPrescription();
  }, []);

  const fetchPrescription = async () => {
    try {
      const response = await getPrescription(patientId);
      setPrescription(response.data);
    } catch (error) {
      console.error("Error fetching prescription:", error);
    }
  };

  const handleViewPrescription = (prescription) => {
    navigate("/patient/prescriptiondetails", {
      state: { prescriptionDetails: prescription },
    });
  };

  return (
    <div className="patient-prescription">
      <h2>Patient Prescriptions</h2>
      {prescription && prescription.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Prescribed Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {prescription.map((item) => (
                <tr key={item.id}>
                  <td>{item.patient.fullName}</td>
                  <td>{item.datePrescribed}</td>
                  <td>
                    <button onClick={() => handleViewPrescription(item)}>
                      View Prescription
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>No prescriptions found.</p>
      )}
    </div>
  );
};

export default PatientPrescription;
