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
  const token = localStorage.getItem('access_token')
  const FormTitles = ['Period 1', 'Period 2', 'Period 3', 'Period 4'];
  let createEntry = async () =>{
          fetch('http://localhost:8000/api/detailcreate/',{
          method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify( {
            source:'1',
            contest:'3',
              slug:'',
            p1_low_temp:'',
            p1_tr0: '',
            p1_tr1: '',
            p1_tr2: '',
            p1_tr3: '',
            p1_tr4: '',
            p1_tr5: '',
            p2_high_temp:'',
            p2_tr0: '',
            p2_tr1: '',
            p2_tr2: '',
            p2_tr3: '',
            p2_tr4: '',
            p2_tr5: '',
            p3_low_temp:'',
            p3_tr0: '',
            p3_tr1: '',
            p3_tr2: '',
            p3_tr3: '',
            p3_tr4: '',
            p3_tr5: '',
            p4_high_temp:'',
            p4_tr0: '',
            p4_tr1: '',
            p4_tr2: '',
            p4_tr3: '',
            p4_tr4: '',
            p4_tr5: '',
            })
          })

        }
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


      axios
        .post('http://localhost:8000/api/token/verify/',{
          token: localStorage.getItem('access_token')
        })
        .then((res) => {
        createEntry()


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
/*
formData.lowTempP1,
formData.PrecipZeroToTracP1e,
formData.PrecipTraceTo005P1,
formData.Precip06To14P1,
formData.Precip15To24P1,
formData.Precip25To49P1,
formData.Precip50PlusP1,
formData.highTempP2,
formData.PrecipZeroToTraceP2,
formData.PrecipTraceTo005P2,
formData.Precip06To14P2,
formData.Precip15To24P2,
formData.Precip25To49P2,
formData.Precip50PlusP2,
formData.lowTempP3,
formData.PrecipZeroToTraceP3,
formData.PrecipTraceTo005P3,
formData.Precip06To14P3,
formData.Precip15To24P3,
formData.Precip25To49P3,
formData.Precip50PlusP3,
formData.highTempP4,
formData.PrecipZeroToTraceP4,
formData.PrecipTraceTo005P4,
formData.Precip06To14P4,
formData.Precip15To24P4,
formData.Precip25To49P4,
formData.Precip50PlusP4,*/
