import "./App.css"
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { Box } from '@mui/material';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Box sx={{ p: 2 }}>
          <Outlet />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Box>
      </Router>
    </>
  )
}

export default App;