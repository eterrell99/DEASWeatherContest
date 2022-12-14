import React, { Fragment, useEffect, useState} from "react";
import axios from "axios";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { TransitionGroup } from 'react-transition-group';
import Collapse from '@mui/material/Collapse';
import {Redirect, useNavigate} from 'react-router-dom'
//import ContestWidgitButton from './ContestWidgitButton';




const ContestWidgit = () => {


    const navigate = useNavigate();
    const handleRedirect = (e) => {
		e.preventDefault();
        navigate('/contests/all/');
        }


    const [contest, setContest] = useState([]);
    const [buttonTest,setButtonTest] = useState({message:'false'});
    useEffect(() => {

        async function fetchData() {

            try {
                const res = await axios.get('/api/contest/active/');
                setContest(res.data);

            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
        }, [])
    useEffect(() => {

        async function fetchButton() {

            try {
                const response = await axios.post('/api/detail/hasentered/',{token: localStorage.getItem('access_token') });
                setButtonTest({message: response.data.message});
                console.log(buttonTest);
            } catch (err) {
                console.log(err);
            }
        }
        

        fetchButton();

        }, []);
    return (
    <Grid item key='3' xs={12} sm={12} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Submit for {contest.day}
                    </Typography>
                    <Typography>
                      Contest will close at { contest.cCLose }


                    </Typography>
                  </CardContent>
                  <CardActions>
                              { buttonTest.message =="true" ? <Button variant="contained" color="success" size="small" to="/submit" >Submit</Button>
                            : buttonTest.message == "false" ? <Button variant="contained" color="success" size="small">Update Submission </Button>
                            : buttonTest.message == "login"? <Button variant="contained" color="success" size="small" to="/login/">Sign In</Button> : <Button variant="contained" color="success" size="small">Waiting</Button>
                                }

                                <Button variant="contained" color="success" size="small" onClick={handleRedirect}>View Previous</Button>
                  </CardActions>
                </Card>
              </Grid>

    )

}
export default ContestWidgit;