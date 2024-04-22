import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isUserLoggedIn } from './service/userservice.js';

const CheckLoggedIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = isUserLoggedIn();
    if (!loggedIn) {
      navigate('/login');
    }
  }, [navigate]);
};

export default CheckLoggedIn;