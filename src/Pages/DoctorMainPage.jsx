import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const DoctorMainPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        color: '#fff',
      }}
    >
      <Container>
        <Row>
          <Col>
            <h1 className="text-center text-black mb-4">Welcome to the Doctor Portal</h1>
            <div className="d-flex justify-content-center flex-wrap">
              <Button
                variant="primary"
                className="m-2"
                onClick={() => navigate('/doctor/register')}
              >
                Register as a Doctor
              </Button>
              <Button
                variant="success"
                className="m-2"
                onClick={() => navigate('/doctor/appointments')}
              >
                View Appointments
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DoctorMainPage;