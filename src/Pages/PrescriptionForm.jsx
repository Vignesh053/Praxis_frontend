import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/PrescriptionForm.css";
import { useLocation, useNavigate } from "react-router-dom";
import {
  createPrescription,
  fetchAllMeds,
  updateAppointmentStatus,
} from "../Service/DoctorService";

const PrescriptionForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { patient, reasonForVisit, appointmentId } = location.state;
  const [medications, setMedications] = useState([]);
  const [prescription, setPrescription] = useState({
    patientId: patient.id,
    instructions: reasonForVisit,
    pmDtoSet: [],
  });

  const fetchMedications = async () => {
    try {
      const response = await fetchAllMeds();
      setMedications(response.data);
    } catch (error) {
      console.error("Error fetching medications:", error);
    }
  };

  useEffect(() => {
    fetchMedications();
  }, []);

  const handleMedicationChange = (index, field, value) => {
    const updatedPmDtoSet = [...prescription.pmDtoSet];

    if (field === "medication") {
      const selectedMedication = medications.find((med) => med.id === value);
      updatedPmDtoSet[index] = {
        ...updatedPmDtoSet[index],
        medicationId: value,
        medication: selectedMedication?.name || "",
      };
    } else {
      updatedPmDtoSet[index][field] = value;
    }

    setPrescription((prevPrescription) => ({
      ...prevPrescription,
      pmDtoSet: updatedPmDtoSet,
    }));
  };

  const addMedication = () => {
    setPrescription((prevPrescription) => ({
      ...prevPrescription,
      pmDtoSet: [
        ...prevPrescription.pmDtoSet,
        {
          medication: "",
          medicationId: "",
          dosage: "",
          frequency: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
  };

  const removeMedication = (index) => {
    const updatedPmDtoSet = [...prescription.pmDtoSet];
    updatedPmDtoSet.splice(index, 1);
    setPrescription((prevPrescription) => ({
      ...prevPrescription,
      pmDtoSet: updatedPmDtoSet,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const prescriptionDto = {
        patientId: prescription.patientId,

        instructions: prescription.instructions,
        pmDtoSet: prescription.pmDtoSet.map((pmDto) => ({
          medicationId: pmDto.medicationId,
          dosage: pmDto.dosage,
          frequency: pmDto.frequency,
          startDate: pmDto.startDate,
          endDate: pmDto.endDate,
        })),
      };
      console.log(prescriptionDto);

      const response = await createPrescription(prescriptionDto);
      const resp = await updateAppointmentStatus(appointmentId);

      console.log(response.data);
      console.log(resp.data);

      navigate("/doctor/appointments");
    } catch (error) {
      console.error("Error creating prescription:", error);
    }
  };

  const frequencyOptions = ["Once a day", "Twice a day", "Thrice a day"];
  const dosageOptions = ["25mg", "50mg", "100mg", "250mg", "500mg", "1000mg"];

  return (
    <div className="prescription-form">
      <h2>Create Prescription</h2>
      <div>
        <h3>Patient Details</h3>
        <p>Name: {patient.fullName}</p>
        <p>Medical History: {patient.medicalHistory}</p>
        <p>Reason for Visit: {reasonForVisit}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <h3>Medications</h3>
        {prescription.pmDtoSet.map((pmDto, index) => (
          <div key={index} className="medication-form">
            <select
              value={pmDto.medicationId} 
              onChange={(e) =>
                handleMedicationChange(index, "medication", e.target.value)
              }
            >
              <option value="">Select Medication</option>
              {medications.map((med) => (
                <option key={med.id} value={med.id}>
                  {med.name}
                </option>
              ))}
            </select>
            <select
              value={pmDto.dosage}
              onChange={(e) =>
                handleMedicationChange(index, "dosage", e.target.value)
              }
            >
              <option value="">Select Dosage</option>
              {dosageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              value={pmDto.frequency}
              onChange={(e) =>
                handleMedicationChange(index, "frequency", e.target.value)
              }
            >
              <option value="">Select Frequency</option>
              {frequencyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="date-input">
              <label htmlFor={`startDate-${index}`}>Start Date</label>
              <input
                id={`startDate-${index}`}
                type="date"
                value={pmDto.startDate}
                onChange={(e) =>
                  handleMedicationChange(index, "startDate", e.target.value)
                }
              />
            </div>
            <div className="date-input">
              <label htmlFor={`endDate-${index}`}>End Date</label>
              <input
                id={`endDate-${index}`}
                type="date"
                value={pmDto.endDate}
                onChange={(e) =>
                  handleMedicationChange(index, "endDate", e.target.value)
                }
              />
            </div>
            <button
              id="remove-btn"
              type="button"
              onClick={() => removeMedication(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addMedication}>
          Add Medication
        </button>
        <button type="submit">Create Prescription</button>
      </form>
    </div>
  );
};

export default PrescriptionForm;
