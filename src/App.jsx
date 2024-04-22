
import "./App.css";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import PatientMainPage from "./Pages/PatientMainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PatientRegister from "./Pages/PatientRegister.jsx";
import AppointmentBooking from "./Pages/AppointmentBooking.jsx";
import PatientPrescription from "./Pages/PatientPrescription.jsx";
import PrescriptionDetails from "./Pages/PrescriptionDetails.jsx";
import DoctorMainPage from "./Pages/DoctorMainPage.jsx";
import DoctorRegistration from "./Pages/DoctorRegistration.jsx";
import DAppointmentList from "./Pages/DAppointmentList.jsx";
import PrescriptionForm from "./Pages/PrescriptionForm.jsx";
import LoginPage from "./Pages/LoginPage.jsx";

function App() {
  return (
    <BrowserRouter>
    <div className="d-flex flex-column ">
      <Header />

      <div>
        <Routes>
        <Route path="/login" element={<LoginPage />}></Route>

          <Route path="/patient" element={<PatientMainPage />}></Route>
          <Route path="/patient/register" element={<PatientRegister />}></Route>
          <Route path="/patient/appointment" element={<AppointmentBooking />}></Route>
          <Route path="/patient/prescription/list" element={<PatientPrescription />}></Route>
          <Route path="/patient/prescriptiondetails" element={<PrescriptionDetails />}></Route>
          
          <Route path="/doctor" element={<DoctorMainPage />}></Route>
          <Route path="/doctor/register" element={<DoctorRegistration />}></Route>
          <Route path="/doctor/appointments" element={<DAppointmentList />}></Route>
          <Route path="/doctor/prescriptionform" element={<PrescriptionForm />}></Route>
        </Routes>
      </div>

      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
