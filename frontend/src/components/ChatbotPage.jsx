import React, { useState } from 'react';
import '../ChatbotPage.css';

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
        <h1>¿En qué puedo ayudarte hoy?</h1>
      </div>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Escribe un mensaje"
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
};

export default ChatbotPage;




