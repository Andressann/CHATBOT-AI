import React from 'react';
import './App.css'; // Asegúrate de tener el archivo styles.css en tu proyecto

function ChatGPTApp() {
  return (
    <div>
      <header>
        <a href="https://www.imbanaco.com/">
          <img src="./front.png" alt="Coomeva" id="logo" />
        </a>
      </header>
      <main>
        <div id="chat-container">
          <div id="messages"></div>
          <form id="message-form">
            <input type="text" id="message-input" placeholder="Type a message..." />
            <button type="submit" id="send-button">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      </main>
      <footer>
        <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">Powered by OpenAI</a>
      </footer>
    </div>
  );
}

export default ChatGPTApp