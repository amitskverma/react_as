import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CreateUserDetails from './UserDetails';
import PersonForm from './personList';
import Index from './index.Jsx';


function App() {

  return (
<div>
  
  <Router>
  <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/create" className="navbar-link">Create(An User)</Link>
        </li>
        <li>
          <Link to="/users" className="navbar-link">Users Details</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/create" element={<CreateUserDetails />} />
      <Route path="/Users" element={<PersonForm />} />
    </Routes>



  </Router>
</div>
  );
}



export default App;