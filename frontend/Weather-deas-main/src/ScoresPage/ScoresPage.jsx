import React from 'react';
import './ScoresPage.css';
import Navbar from '../NavBar/NavBar';


function ScoresPage() {
  return(
    <>
    <Navbar />
    <div className="main-content">
      <h1>Prior Scores</h1>
    </div>
    <div className="dropdown">
    <button className="dropbtn">Sort By</button>
    <div className="dropdown-content">
      <a href="#">Complete Scores</a>
      <a href="#">Scores By Period</a>
      <a href="#">Scores By Game</a>
      <a href="#">All Scores</a>
    </div>
    </div>
    <br />
    <br />

    <div className="btn-1">
  <button>Climatology</button>
  </div>

  <div className="btn-2">
  <button>Consensus</button>
  </div>

  <div className="btn-3">
  <button>Encon</button>
  </div>

  <div className="btn-4">
  <button>GFS</button>
  </div>

  <div className="btn-5">
  <button>NAM</button>
  </div>

  <div className="btn-6">
  <button>Ross Lazear</button>
  </div>

  <div className="btn-7">
  <button>Weather Channel</button>
  </div>
  
    </>
  )
}











export default ScoresPage;