import React, { useState } from 'react';
import Navbar from '../NavBar/NavBar';
import './submitform.scss';
import axios from 'axios';
import Period1 from './Period1';
import Period2 from './Period2';
import Period3 from './Period3';
import Period4 from './Period4';
import axiosInstance from "axios";

import { useNavigate } from "react-router";
function SubmitForm() {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({

    lowTempP1: 0,
    highTempP2: 0,
    lowTempP3: 0,
    highTempP4: 0,
    PrecipZeroToTracP1e: 0,
    PrecipTraceTo005P1: 0,
    Precip06To14P1: 0,
    Precip15To24P1: 0,
    Precip25To49P1: 0,
    Precip50PlusP1: 0,
    PrecipZeroToTraceP2: 0,
    PrecipTraceTo005P2: 0,
    Precip06To14P2: 0,
    Precip15To24P2: 0,
    Precip25To49P2: 0,
    Precip50PlusP2: 0,
    PrecipZeroToTraceP3: 0,
    PrecipTraceTo005P3: 0,
    Precip06To14P3: 0,
    Precip15To24P3: 0,
    Precip25To49P3: 0,
    Precip50PlusP3: 0,
    PrecipZeroToTraceP4: 0,
    PrecipTraceTo005P4: 0,
    Precip06To14P4: 0,
    Precip15To24P4: 0,
    Precip25To49P4: 0,
    Precip50PlusP4: 0,

  });
  const token = localStorage.getItem('access_token')
  const FormTitles = ['Period 1', 'Period 2', 'Period 3', 'Period 4'];
  let createEntry = axios.post('http://localhost:8000/api/detailcreate/',
      {
              token: localStorage.getItem('access_token'),
              p1_low_temp: formData.lowTempP1,
              p2_high_temp: formData.highTempP2,
              p3_low_temp: formData.lowTempP3,
              p4_high_temp: formData.highTempP4,
              p1_tr0: formData.PrecipZeroToTracP1e,
              p1_tr1: formData.PrecipTraceTo005P1,
              p1_tr2: formData.Precip06To14P1,
              p1_tr3: formData.Precip15To24P1,
              p1_tr4: formData.Precip25To49P1,
              p1_tr5: formData.Precip50PlusP1,
              p2_tr0: formData.PrecipZeroToTraceP2,
              p2_tr1: formData.PrecipTraceTo005P2,
              p2_tr2: formData.Precip06To14P2,
              p2_tr3: formData.Precip15To24P2,
              p2_tr4: formData.Precip25To49P2,
              p2_tr5: formData.Precip50PlusP2,
              p3_tr0: formData.PrecipZeroToTraceP3,
              p3_tr1: formData.PrecipTraceTo005P3,
              p3_tr2: formData.Precip06To14P3,
              p3_tr3: formData.Precip15To24P3,
              p3_tr4: formData.Precip25To49P3,
              p3_tr5: formData.Precip50PlusP3,
              p4_tr0: formData.PrecipZeroToTraceP4,
              p4_tr1: formData.PrecipTraceTo005P4,
              p4_tr2: formData.Precip06To14P4,
              p4_tr3: formData.Precip15To24P4,
              p4_tr4: formData.Precip25To49P4,
              p4_tr5: formData.Precip50PlusP4,
            },
      {'Content-Type': 'application/json',
              token: localStorage.getItem('access_token')
            }

          );


  const PageDisplay = () => {
    if (page === 0) {
      return <Period1 formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Period2 formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Period3 formData={formData} setFormData={setFormData} />;
    } else {
      return <Period4 formData={formData} setFormData={setFormData} />;
    }
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setPage((currPage) => currPage - 1);
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {

    e.preventDefault();
    if (page === 3) {


      axios.post('http://localhost:8000/api/token/verify/', {
            token: localStorage.getItem('access_token')
          })
          .then((res) => {
            createEntry()
          });


    } else {
      setPage((currPage) => currPage + 1);


    }
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <main className="main-content">
        <form method="get" className="form">
          <div className="body">
            <div className="form-container">
              <div className="progressbar">
                <div
                  style={{
                    width:
                      page === 0
                        ? '25%'
                        : page === 1
                        ? '50%'
                        : page === 2
                        ? '75%'
                        : '100%',
                  }}
                ></div>
              </div>
              <h4 className="form-title">{FormTitles[page]}</h4>
              {PageDisplay()}

              <div className="footer">
                <button disabled={page === 0} onClick={handlePrev}>
                  Prev
                </button>
                <button onClick={handleSubmit}>
                {page === FormTitles.length - 1 ?
                  'Submit':'Next Period'

                }</button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );

}
export default SubmitForm;
























