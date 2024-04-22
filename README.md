## Overview

The Patient Medication and Appointment Management System is a web application that provides two portals: one for doctors and another for patients. This system streamlines the process of managing patient appointments and prescriptions, ensuring efficient healthcare delivery.

## Features

### Doctor Portal

- View a list of scheduled appointments with patient details
- Prescribe medications for patients
- Manage patient medical records

### Patient Portal

- Register as a new patient
- Book appointments with doctors
- View prescribed medications, including name, date, and frequency
- Access medical history and prescription records

## Technology Stack

**Frontend**

- React
- Vite
- CSS

**Backend**

- Spring Boot
- Spring Security
- Spring JPA

**Database**

- MySQL

**Other Tools**

- Axios (for AJAX calls)

## Getting Started

### Prerequisites

- Java 17 or higher
- Node.js and npm
- MySQL Server

### Installation

1. Clone the repository:
   frontend:

```
 git clone https://github.com/Vignesh053/Praxis_frontend.git
```

backend:

```
 git clone https://github.com/Vignesh053/Praxis-backend.git
```

2. Set up the backend:

   - Open the project in your preferred IDE
   - Configure the database connection in `application.properties` which is under src/main/resources

   ```
   spring.datasource.url=jdbc:mysql://localhost:3306/praxis (database name)
   spring.datasource.username=root (username for mysql)
   spring.datasource.password=password (password for mysql)
   ```

   - Build and run the Spring Boot application

3. set up database:

   - launch mysql workbench
   - run these queries for user details.

   for users table:

   ```
   insert into users(email,password,username)values("john@gamil.com","$2a$10$db6Ul1dzzUYvuqmsLqJhpecwcjTVqL4nKREHneVmjDH4yrD.qTIM2","john");

   insert into users(email,password,username)values("admin@gmail.com","$2a$10$db6Ul1dzzUYvuqmsLqJhpecwcjTVqL4nKREHneVmjDH4yrD.qTIM2","admin");
   ```

   for roles table:

   ```
   insert into roles(name)values("ROLE_USER");

   insert into roles(name)values("ROLE_ADMIN");
   ```

   for users_roles table:

   ```
   insert into users_roles values(1,1);

   insert into users_roles values(2,1);

   insert into users_roles values(2,2);
   ```

   for medication table

   ```

   ```

INSERT INTO medications (name, description) VALUES
('Amoxicillin', 'Used to treat a wide variety of bacterial infections.');

INSERT INTO medications (name, description) VALUES
('Ibuprofen', 'Used to reduce fever and treat pain or inflammation.');

INSERT INTO medications (name, description) VALUES
('Metformin', 'Used to improve blood sugar control in adults with type 2 diabetes.');

INSERT INTO medications (name, description) VALUES
('Amlodipine', 'Used to treat chest pain (angina) and other conditions caused by coronary artery disease.');

INSERT INTO medications (name, description) VALUES
('Azithromycin', 'Used to treat a wide variety of bacterial infections, such as respiratory infections.');

INSERT INTO medications (name, description) VALUES
('Hydrochlorothiazide', 'Used to treat high blood pressure and fluid retention (edema).');

INSERT INTO medications (name, description) VALUES
('Omeprazole', 'Used to treat certain stomach and esophagus problems (such as acid reflux).');

```

4. Set up the frontend:

- Navigate to the `frontend` directory
- Run `npm install` to install dependencies
- Run `npm run dev` to start the development server

5. Access the application at `http://localhost:5173/login`

## Screenshots

### Login
 - logging in as a patient
![Login Page](https://github.com/Vignesh053/Praxis_frontend/blob/383ce81347d2a43b57d9155fecbec1c71cc5d773/screenshots/login_patient.png)

### Patient Portal

![Main Page](https://github.com/Vignesh053/Praxis_frontend/blob/383ce81347d2a43b57d9155fecbec1c71cc5d773/screenshots/patient_portal.png)



### Register a patient

![Register](https://github.com/Vignesh053/Praxis_frontend/blob/383ce81347d2a43b57d9155fecbec1c71cc5d773/screenshots/patient_register.png)

### Booking an appointment

- you can select the doctor you wish to consult with

![appointment](https://github.com/Vignesh053/Praxis_frontend/blob/383ce81347d2a43b57d9155fecbec1c71cc5d773/screenshots/patient_appointment1.png)

![appointment](https://github.com/Vignesh053/Praxis_frontend/blob/383ce81347d2a43b57d9155fecbec1c71cc5d773/screenshots/patient_appointment2.png)

![appointment](https://github.com/Vignesh053/Praxis_frontend/blob/383ce81347d2a43b57d9155fecbec1c71cc5d773/screenshots/patient_appointment3.png)


### Patient Prescription viewing

![Prescription](https://github.com/Vignesh053/Praxis_frontend/blob/383ce81347d2a43b57d9155fecbec1c71cc5d773/screenshots/patient_presc1.png)

![Prescription](https://github.com/Vignesh053/Praxis_frontend/blob/383ce81347d2a43b57d9155fecbec1c71cc5d773/screenshots/patient_presc2.png)


### Doctor Portal
- if user has admin role, the user will automatically routed to doctor portal

![Doctor Portal](https://github.com/Vignesh053/Praxis_frontend/blob/383ce81347d2a43b57d9155fecbec1c71cc5d773/screenshots/doc_login.png)

![Doctor Portal](https://github.com/Vignesh053/Praxis_frontend/blob/383ce81347d2a43b57d9155fecbec1c71cc5d773/screenshots/doc_portal.png)

### Registering a Doctor


![Register Doctor](https://github.com/Vignesh053/Praxis_frontend/blob/383ce81347d2a43b57d9155fecbec1c71cc5d773/screenshots/doc_register.png)

### View Appointments
- old appointments and new apointments will be shown in seperate tables. new appointments can be interacted with to create a new prescription for the associated patient. creating a prescription will add the prescription in patient portal

![Appointment](https://github.com/Vignesh053/Praxis_frontend/blob/383ce81347d2a43b57d9155fecbec1c71cc5d773/screenshots/doc_appointment.png)

### Create Prescription


![Appointment](https://github.com/Vignesh053/Praxis_frontend/blob/383ce81347d2a43b57d9155fecbec1c71cc5d773/screenshots/doc_presc1.png)


![Appointment](https://github.com/Vignesh053/Praxis_frontend/blob/383ce81347d2a43b57d9155fecbec1c71cc5d773/screenshots/doc_presc2.png)

![Appointment](https://github.com/Vignesh053/Praxis_frontend/blob/383ce81347d2a43b57d9155fecbec1c71cc5d773/screenshots/doc_presc3.png)


- the prescription added to patient

![Prescription](https://github.com/Vignesh053/Praxis_frontend/blob/383ce81347d2a43b57d9155fecbec1c71cc5d773/screenshots/patient_presc2.png)
```
