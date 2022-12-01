import React, { Fragment, useEffect, useState} from "react";
import axios from "axios";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);








const Contests = () => {
    const [contests, setContests] = useState(
        []
    );
	const token = localStorage.getItem('access_token');
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
    }


    return ( <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2}>

           { contests.map((each) => (
    <Grid item xs={4}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
        <Button size="medium" variant="contained">Submit</Button>
      </CardActions>
    </Card>
    </Grid>

                )
            )

           }
         </Grid>
    </Box>
            );
}
export default Contests;