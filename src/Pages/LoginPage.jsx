import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  loginUser, saveLoggedInUser, storeToken } from '../Service/AuthService';
import '../Styles/LoginPage.css'


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(username, password);

      console.log(response)

      storeToken(response.data.accessToken);

      
     
      saveLoggedInUser(username, response.data.userId, response.data.role, response.data.docOrPatId)

      

      if(response.data.role === 'ROLE_USER'){
        navigate("/patient")
      }else{
        navigate("/doctor")
      }
      
    } catch (err) {
      setError(err.message || 'An error occurred during login');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;