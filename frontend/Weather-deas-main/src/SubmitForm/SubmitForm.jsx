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
    lowTempP1: '',
    highTempP2: '',
    lowTempP3: '',
    highTempP4: '',
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

  const FormTitles = ['Period 1', 'Period 2', 'Period 3', 'Period 4'];

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
    if (page === FormTitles.length - 1) {
      const token = localStorage.getItem('access_token');

      axiosInstance
        .post('http://localhost:8000/api/token/verify/',{
          token: localStorage.getItem('access_token')
        })
        .then((res) => {
        let tmpvar = res;


        });
      axiosInstance
        .post('http://localhost:8000/api/detail/',{
          formData
        })
        .then((res) => {
        let tmpvar = res;


        });



    } else {
      setPage((currPage) => currPage + 1);


    }
  };

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
                  {page === FormTitles.length - 1 ? 'Submit' : 'Next'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SubmitForm;
