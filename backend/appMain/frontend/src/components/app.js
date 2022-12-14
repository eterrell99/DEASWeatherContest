import React, { Component } from "react";
import './App.css';


import Home from './home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {createRoot} from "react-dom/client";
import ResponsiveAppBar from "./NavBar";
import SignIn from "./LoginPage.jsx";
import SubmitForm from "./SubmitForm/SubmitForm.jsx";
import ContestList from "./ContestList"
import Leaderboard from "./leaderboard.js"
function App() {

    return (
        <Router>
            <Routes>
                <Route path="" element={<Home />}/>
                <Route path="/" element={<Home />}/>
                <Route path="/login/" element={<SignIn />} />
                <Route path="/submit/" element={<SubmitForm />} />
                <Route path="/contests/all/" element={<ContestList/> } />
                <Route path="/score/leaderboard/" element={<Leaderboard /> } />
            </Routes>
        </Router>
    )


}


const appDiv = createRoot(document.getElementById("app"));
appDiv.render(<App />);