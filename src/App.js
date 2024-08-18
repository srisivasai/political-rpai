import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountSelector from './components/AccountSelector';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import ModuleManagement from './components/ModuleManagement';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import other components...

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccountSelector />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/module-management" element={<ModuleManagement />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default App;
