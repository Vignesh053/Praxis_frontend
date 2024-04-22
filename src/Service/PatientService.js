import axios from "axios";

const BASE_PATIENT_ENDPOINT = 'http://localhost:8080/patient/';

export const createPatient = async (patientDto, userId) =>{
    const response = await axios.post(`${BASE_PATIENT_ENDPOINT}create/${userId}`, patientDto);

    return response;
}

export const getDocs = async () =>{
    const response = await axios.get(`${BASE_PATIENT_ENDPOINT}getdoctors`);

    return response;
}

export const bookAppointment = async (appointmentDto) => {
    const response = await axios.post(`${BASE_PATIENT_ENDPOINT}createappointment`, appointmentDto )
    return response;
}

export const getPrescription = async (patientId) =>{
    const response = await axios.get(`${BASE_PATIENT_ENDPOINT}getprescriptions/${patientId}`)
    return response;
}