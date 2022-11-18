import React, { useEffect, useState } from 'react';
import './App.css';
import SubmitPage from './SubmitPage/SubmitPage.jsx';
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import ScoresPage from "./ScoresPage/ScoresPage";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/SubmitPage" element={<SubmitPage />} />
        <Route path="/ScoresPage" element={<ScoresPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;





