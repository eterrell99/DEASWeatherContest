import React, { useEffect, useState } from 'react';
import './homepage.scss';
import ContestLoadingComponent from './contestLoading';
import Navbar from '../NavBar/NavBar';
import Contests from './Contests';
import cookie from 'react-cookies';
import axios from 'axios';
import axiosInstance from 'axios';
import Widgit from './widgit';
import Clock from './clock';
function HomePage() {
  const ContestLoading = ContestLoadingComponent(Contests);

  const [appState, setAppState] = useState({});

  // txt;

  axiosInstance
    .post('http://localhost:8000/api/token/verify/', {
      token: localStorage.getItem('access_token'),
    })
    .then((res) => {
      let tmpvar = res;
    });

  return (
    <>
      <Navbar />
      <main className="main-content">
        <div className="middle-content">
          <h1>Welcome to the UAlbany Weather Contest</h1>
          <h3>Ran by Professor Lazear</h3>

          <h5>Current Weather Challenge</h5>
          <p>
            Forecast the maximum and minimum temperatures, precipitation, and
            maximum wind speeds for select U.S. cities. Over a ten-week period
            (each semester), you'll compete against top student and faculty
            meteorologists for honors as the top weather forecaster in North
            America.
          </p>
        </div>
        <div className="grid-2">
          <Clock />
          <Widgit />
        </div>
      </main>
      <div className="table-titles">
        <h1 className="rank-title">Composite Rankings of Forecasters</h1>
        <h1 className="verify-title">Recent Verifications</h1>
      </div>
      <div className="tables">
        <table className="list-rankings">
          <tr className="ranking-titles">
            <th className="name"> Name</th>
            <th>Entries</th>
            <th>Scores</th>
          </tr>
          <tr>
            <td>Chris Gilberti</td>
            <td>104</td>
            <td>8.13</td>
          </tr>
          <tr>
            <td>Ross Lazear</td>
            <td>109</td>
            <td>0.53</td>
          </tr>
          <tr>
            <td>*CONSENSUS*</td>
            <td>144</td>
            <td>0.00</td>
          </tr>
        </table>

        <table className="list-rankings">
          <tr className="ranking-titles">
            <th className="name"> 12 hrs Beginning</th>
            <th>Temp</th>

            <th>Precip</th>
          </tr>
          <tr>
            <td>Oct 31st, 2022 0HZ</td>
            <td>37F</td>
            <td>0.00"</td>
          </tr>
          <tr>
            <td>Oct 30st, 2022 12HZ</td>
            <td>37F</td>
            <td>0.00"</td>
          </tr>
          <tr>
            <td>Oct 30st, 2022 0HZ</td>
            <td>37F</td>
            <td>0.00"</td>
          </tr>
        </table>


      </div>
      <div className="grid-3"><Contests /></div>
    </>
  );
}

export default HomePage;
