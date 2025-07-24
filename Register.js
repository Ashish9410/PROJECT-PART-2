import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // for redirect

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        name,
        email,
        password,
      });

      alert('Registration successful! Please login.');
      console.log('Success:', response.data);

      // redirect to login
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);

      if (error.response) {
        alert(`Error: ${error.response.data.message || 'Registration failed'}`);
        console.log('Server Error:', error.response);
      } else {
        alert('Network Error: Make sure backend is running & CORS is allowed.');
        console.log('Network error:', error);
      }
    }
  };

  return (
    <div className="register-container">
      <form className="register-card" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
