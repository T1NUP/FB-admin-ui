import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { useNavigate } from 'react-router-dom';
import { Route, BrowserRouter,Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Home';
import Admin from './components/Admin';
import Register from './components/Register';
import WelcomeComponent from './components/WelcomeComponent';

function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        {/* </Routes>
        <Routes> */}
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
