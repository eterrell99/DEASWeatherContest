import React, { Fragment, useEffect, useState} from "react";
import axios from "axios";
import ResponsiveAppBar from "./NavBar";
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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(user,entries,score) {
  return {user,entries,score};
}



const rows = [
  createData('User 1', 159, 0.67),
  createData('User 2', 237, 0.56),
  createData('user 3', 262, 0.40)

];
const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([])
    const [lb1,setLb1] = useState({});
    const [lb2,setLb2] = useState([]);
    const [lb3,setLb3] = useState([]);
    useEffect(() => {

        async function fetchLeaders() {

            try {
                const res = await axios.post('/api/score/leaderboard/');
                setLeaderboard(res.data);
                console.log(res);
                console.log(res.data);

            } catch (err) {
                console.log(err);
            }
        }

        fetchLeaders();


        }, []);
    return (    <div>
                <ResponsiveAppBar/>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                >
                  <CardContent sx={{ flexGrow: 5 }}>
                     <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 250 }} aria-label="simple table">

                            <TableHead>
                                <TableRow>
                                    <TableCell>LeaderBoard</TableCell>
                                    <TableCell align="center">Participant</TableCell>
                                    <TableCell align="center">Entries</TableCell>
                                    <TableCell align="center">Score</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row,i) => (
                                <TableRow
                                key={row.user}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align="center">{i+1}</TableCell>
                                    <TableCell align="center">{row.user}</TableCell>
                                    <TableCell align="center">{row.entries}</TableCell>
                                    <TableCell align="center">{row.score}</TableCell>

                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                  </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
</div>

    )

}
export default Leaderboard;