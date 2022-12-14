import React, { Fragment, useEffect, useState} from "react";
import axios from "axios";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WindImg from '../assets/images/wind.svg';
import HumidityImg from '../assets/images/Humidity.svg';
import VisibilityImg from '../assets/images/Visibility.svg';
import W02n from '../assets/images/02n.svg';

const ContestWidgit = () => {
    const [temperature, setTemperature] = useState('');
    const [city, setCity] = useState('albany');
    const [desc, setDesc] = useState('');
    const [name, setName] = useState('');
    const [humidity, setHumidity] = useState('');
    const [visibility, setVisibility] = useState('');
    const [windspeed, setWineSpeed] = useState('');
    const [wicon, setWicon] = useState('');
        const getWeatherData = () => {
        axios({
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e203317f0df5474c05874e35b030eda3`,
        })
      .then((response) => {
        setTemperature(Math.round(response.data.main.temp - 273.15) * 2 + 30);
        setDesc(response.data.weather[0].description);
        setName(response.data.name);
        setHumidity(response.data.main.humidity);
        setVisibility(response.data.visibility / 1000);
        setWineSpeed(response.data.wind.speed);
        setWicon(response.data.weather[0].icon);
        console.log(response);
      })
      .catch((error) => {});
    };
        getWeatherData()



    return (
    <Card style={{backgroundColor: "grey"}}>
        <CardContent>
            <Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <img src={W02n} />
                    </Grid><Grid item xs={4}>
                        {temperature}
                    </Grid><Grid item xs={4}>
                        {city}-{desc}
                    </Grid>
                </Grid>
            </Typography>
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>

                <Grid container>
                    <Grid item xs={6}>
                    <img src={HumidityImg} />
                    </Grid><Grid item xs={6}>
                    {humidity}
                    </Grid>
                </Grid>
            </Typography>
            <Typography variant="h5" component="div">
                <img src={VisibilityImg} />
                {visibility}
            </Typography>
            <Typography variant="body2">
                <img src={WindImg} />
                {windspeed}
            </Typography>
        </CardContent>
    </Card>

    )

}
export default ContestWidgit;