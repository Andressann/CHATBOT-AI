import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ChatbotPage from './components/ChatbotPage';
import { UserProvider } from './components/UserContext';
import './App.css';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;