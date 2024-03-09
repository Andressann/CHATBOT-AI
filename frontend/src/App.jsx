import './App.css'
import { Routes, Route } from 'react-router-dom'
import { UserContextProvider } from './context/UserContext'
import Login from './pages/LoginPage'
import Register from './pages/RegisterPage'

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App
