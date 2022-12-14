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

import ContestWidgit from "./ContestWidgit";
import WeatherWidgit from "./WeatherWidgit";


const Contests = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('/api/contest/');
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);

    return (


        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={3} sx={{ padding: 5 }} justifyContent="center"
  alignItems="flex-start">

                {posts.map(each => (
                    <Grid item xs={3} key={each.slug}>


                            <Card >
                                <CardContent>
                                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                        DEAS Weather Contest
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {each.day}
                                    </Typography>
                                    <Typography variant="body2">
                                        Contest Closes At:
                                        <br/>
                                        {each.cCLose}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {each.isOpen ? <Button color="secondary" size="medium" variant="contained">Submit</Button> : <Button size="medium" variant="contained">View Results</Button> }
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                )

                }


            </Grid>

            <Button>see more</Button>

        </Box>

    )
}
export default Contests;



    /*const token = localStorage.getItem('access_token');
    try {
    const response = fetch("http://localhost:8000/api/contest/", {
    method: "GET",
    mode: "cors",
    withCredentials: false,

    headers: {
        "Content-Type": "application/json",
        "Authorization": 'bearer '+token

    },

    }).then((res) => {
        return res.json()})
        .then((data)=> setContests(data))
    } catch (err) {
        console.log(err)
    }*/
