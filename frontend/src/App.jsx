import React from 'react';


const ChatGPTApp = () => {
  return (
    <div className="flex justify-center">
      <div className="font-sans max-w-3xl mx-auto p-4 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('./src/background.jpg')"}}>
        <header className="flex items-center justify-between text-teal-700 p-4 text-center rounded mb-4">
          <a href="https://www.imbanaco.com/">
            <img src="./src/front.png" alt="Clinica Mano logo" id="logo" className="h-24 mr-24" />
          </a>
        </header>
        <main>
          <div id="chat-container" className="border border-gray-300 p-4 bg-white bg-opacity-80 rounded flex flex-col h-96">
            <div id="messages" className="overflow-y-auto flex-grow mb-4 p-4 border border-gray-300 rounded"></div>
            <form id="message-form" className="flex">
              <input type="text" id="message-input" placeholder="Type a message..." className="w-full p-2 border border-gray-300 rounded mr-2" />
              <button type="submit" id="send-button" className="w-12 h-12 bg-transparent border-none p-0 m-0 cursor-pointer flex items-center justify-center">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-teal-500">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
          </div>
        </main>
        <footer className="bg-white bg-opacity-80 text-teal-700 p-4 text-center rounded mt-4">
          <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer" className="text-teal-500">Powered by OpenAI</a>
        </footer>
      </div>
      <div className="main w-80 h-96 bg-red-500 overflow-hidden rounded-lg shadow-lg" style={{backgroundImage: "url('https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38')"}}>
        <input type="checkbox" id="chk" className="hidden" />
        <div className="signup">
          <label htmlFor="chk" className="text-white text-3xl justify-center flex mt-16 mb-12 font-bold cursor-pointer transition duration-500">REGISTRO</label>
          <input type="text" name="txt" placeholder="User name" required="" className="w-3/5 bg-gray-300 justify-center flex mx-auto mb-4 py-2 px-4 rounded" />
          <input type="email" name="email" placeholder="Email" required="" className="w-3/5 bg-gray-300 justify-center flex mx-auto mb-4 py-2 px-4 rounded" />
          <input type="password" name="pswd" placeholder="Password" required="" className="w-3/5 bg-gray-300 justify-center flex mx-auto mb-4 py-2 px-4 rounded" />
          <button className="w-3/5 bg-purple-700 text-white font-bold py-2 px-4 rounded hover:bg-purple-800 transition duration-200">Registrar</button>
        </div>
        <div className="login bg-gray-200 h-3/4 rounded-b-lg transform translate-y-64 transition duration-800">
          <form>
            <label htmlFor="chk" className="text-purple-700 text-3xl justify-center flex mt-16 mb-12 font-bold cursor-pointer transition duration-500">INICIO</label>
            <input type="email" name="email" placeholder="Email" required="" className="w-3/5 bg-gray-300 justify-center flex mx-auto mb-4 py-2 px-4 rounded" />
            <input type="password" name="pswd" placeholder="Password" required="" className="w-3/5 bg-gray-300 justify-center flex mx-auto mb-4 py-2 px-4 rounded" />
            <button className="w-3/5 bg-purple-700 text-white font-bold py-2 px-4 rounded hover:bg-purple-800 transition duration-200">Iniciar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatGPTApp;
