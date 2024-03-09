
import './App.css'
const App = () => {
  return (
    <>
      <DOCTYPE html />
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>registro / Inicio</title>
          <link rel="stylesheet" href="./App.css" />
        </head>
        <body>
          {/* partial:index.partial.html */}
          <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />

            <div className="signup">
              <label htmlFor="chk" aria-hidden="true">
                REGISTRO
              </label>
              <input type="text" name="txt" placeholder="User name" required="" />
              <input type="email" name="email" placeholder="Email" required="" />
              <input type="password" name="pswd" placeholder="Password" required="" />
              <button>Registrar</button>
            </div>

            <div className="login">
              <form>
                <label htmlFor="chk" aria-hidden="true">
                  INICIO
                </label>
                <input type="email" name="email" placeholder="Email" required="" />
                <input type="password" name="pswd" placeholder="Password" required="" />
                <button>Iniciar</button>
              </form>
            </div>
          </div>
          {/* partial */}
        </body>
      </html>
    </>
  );
};

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
