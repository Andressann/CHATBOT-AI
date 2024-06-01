import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import '../App.css';
import { authenticate, register } from '../authService';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      if (authenticate(email, password)) {
        login({ email });
        navigate('/chatbot');
      } else {
        setMessage('Invalid email or password');
      }
    } else {
      if (register(email, password)) {
        setMessage('Registration successful! Please log in.');
        toggleForm();
      } else {
        setMessage('Email already exists. Please use a different email.');
      }
    }
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" checked={!isLogin} onChange={toggleForm} />
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true">INICIO</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Iniciar</button>

        </form>
      </div>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true">REGISTRO</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Registrar</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};
export default LoginPage;
