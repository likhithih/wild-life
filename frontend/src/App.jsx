import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Content from './components/Content'
import Home from './pages/Home'
import Safari from './pages/Safari'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/content" element={<Content />} />
        <Route path="/safari" element={<Safari />} />
      </Routes>
    </Router>
  )
}

export default App
