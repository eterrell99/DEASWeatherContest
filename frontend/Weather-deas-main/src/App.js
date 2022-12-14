import React, { useEffect, useState } from 'react';
//import '../../../backend/appMain/frontend/src/components/App.css';
import SubmitPage from 'SubmitPage/SubmitPage.jsx';
import HomePage from "HomePage/HomePage";
import LoginPage from "DEASWeatherContest-master-new/backend/appMain/frontend/src/components/LoginPage";
import ScoresPage from "ScoresPage/ScoresPage";
import SubmitForm from "DEASWeatherContest-master-new/backend/appMain/frontend/src/components/SubmitForm/SubmitForm";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/SubmitPage" element={<SubmitPage />} />
        <Route path="/ScoresPage" element={<ScoresPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="SubmitForm" element={<SubmitForm />} />
      </Routes>
    </Router>
  );
}

export default App;





