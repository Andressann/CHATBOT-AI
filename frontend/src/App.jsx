import './App.css';
import {Route, Routes} from "react-router-dom";
import {UserContextProvider} from "./UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </UserContextProvider>
  )
}



export default App
