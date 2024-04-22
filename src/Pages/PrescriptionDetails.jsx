import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Styles/PrescriptionDetails.css'

const PrescriptionDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const prescriptionDetails = location.state?.prescriptionDetails;

  if (!prescriptionDetails) {
    return (
      <div>
        <h2>Prescription Details</h2>
        <p>No prescription details found.</p>
      </div>
    );
  }

  return (
    <div className="prescription-details-container">
      <h2>Prescription Details</h2>
      <p>{prescriptionDetails.instructions}</p>
      <div className="medication-table-container">
        <h3>Medications</h3>
        <table className="medication-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Dosage</th>
              <th>Frequency</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {prescriptionDetails.pmDtoSet.map((item) => (
              <tr key={item.id}>
                <td>{item.medication.name}</td>
                <td>{item.dosage}</td>
                <td>{item.frequency}</td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default PrescriptionDetails;