import React, { useState } from 'react';
import "./LoginPage.css";
import axiosInstance from 'axios';

import {Redirect, useNavigate} from 'react-router-dom'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/material/styles';
import Container from '@mui/material/Container';
import LogoImg from "../assets/images/logoimg.jpg";

export default function SignIn() {
	const navigate = useNavigate();
	const initialFormData = Object.freeze({
		username: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleFormChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post(`http://localhost:8000/api/token/`, {
				username: formData.username,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
				console.log(res);
				console.log(res.data);
				navigate('/');


			});
	};



  return (
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src={LogoImg}
                style={{width: '100%'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">Weather Prediction Contest</h4>
            </div>

            <p>Please login to your account</p>
            <form noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required

						id="username"
						label="username"
						name="username"
						autoComplete="username"
						autoFocus
						onChange={handleFormChange}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required

						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={handleFormChange}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						type="submit"

						variant="contained"
						color="primary"

						onClick={handleSubmit}
					>
						Sign In
					</Button>

              </form>
            </div>



        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">Current Weather Challenge</h4>
              <p className="small mb-0">Forecast the maximum and minimum temperatures, precipitation, and
            maximum wind speeds for select U.S. cities. Over a ten-week period
            (each semester), you'll compete against top student and faculty
            meteorologists for honors as the top weather forecaster in North
            America.
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

//export default App;