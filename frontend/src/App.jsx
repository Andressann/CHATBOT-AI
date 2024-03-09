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