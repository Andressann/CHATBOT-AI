import './App.css';
import {Route, Routes} from "react-router-dom";
import {UserContextProvider} from "./UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element ={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </UserContextProvider>
  )
}



export default App
