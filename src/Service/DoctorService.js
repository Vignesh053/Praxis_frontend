import axios from "axios";

const BASE_DOCTOR_ENDPOINT = 'http://localhost:8080/doctor/';

export const registerDoc = async (doctorDto, userId) =>{
    const response = await axios.post(`${BASE_DOCTOR_ENDPOINT}register/${userId}`, doctorDto);

    return response;
}

export const getAppointments = async (doctorId) =>{
    const response = await axios.get(`${BASE_DOCTOR_ENDPOINT}appointments/${doctorId}`)

    return response;
}

export const fetchAllMeds = async () =>{
    const response = await axios.get(`${BASE_DOCTOR_ENDPOINT}medications`);

    return response;
}

export const createPrescription = async(prescriptionDto) =>{
    const response = await axios.post(`${BASE_DOCTOR_ENDPOINT}create/prescription`, prescriptionDto);
    return response;
}

export const updateAppointmentStatus = async(appointmentId) => {
    const response = await axios.get(`${BASE_DOCTOR_ENDPOINT}updatestatus/${appointmentId}`);

    return response;
}