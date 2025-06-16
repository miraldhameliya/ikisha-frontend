import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Login from './pages/auth/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
