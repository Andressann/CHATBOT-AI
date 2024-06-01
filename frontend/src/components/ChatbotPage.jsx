import React, { useState } from 'react';
import '../ChatbotPage.css';

import botIcon from '../assets/botIcon.png'; // Asegúrate de que la ruta sea correcta
import userIcon from '../assets/userIcon.png'; // Asegúrate de que la ruta sea correcta
import sendIcon from '../assets/boton.png';


const ChatbotPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Aquí puedes agregar la lógica para enviar el mensaje a un backend o servicio de chatbot
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: `Echo: ${input}`, sender: 'bot' }
        ]);
      }, 1000); // Simula la respuesta del bot después de 1 segundo
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="chatbot-page">
      <div className="chat-header">

        <img src={botIcon} alt="Bot" className="bot-icon" />
        <div className="header-text">
          <h2>My Chatbot</h2>
          <span className="agent">Chatbot Agent</span>
        </div>
      </div>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message-container ${message.sender}`}>
            <img
              src={message.sender === 'user' ? userIcon : botIcon}
              alt={message.sender}
              className="avatar"
            />
            <div className={`message ${message.sender}`}>
              {message.text}
            </div>

          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}

          placeholder="Type here and press enter to chat"
        />
       <img 
          src={sendIcon} 
          alt="Send" 
          onClick={handleSend} 
          className="send-icon"
        />

      </div>
    </div>
  );
};

export default ChatbotPage;
