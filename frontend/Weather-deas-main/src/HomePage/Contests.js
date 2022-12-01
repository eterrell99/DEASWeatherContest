import React, { Fragment, useEffect, useState} from "react";
import axios from "axios";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const Contests = () => {
    const [users, setUsers] = useState(
        []
    );
	const token = localStorage.getItem('access_token');
    const response = fetch("http://localhost:8000/api/user/", {
    method: "GET",
    mode: "cors",
    withCredentials: false,

    headers: {
        "Content-Type": "application/json",
        "Authorization": 'bearer '+token

    },

    }).then((res) => {
        return res.json()})
        .then((data)=> setUsers(data))



    return (<div>
           { users.map((each) => (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
                )
            )

           }
    </div>
            );
}
export default Contests;
