import { Fragment, useEffect, useState} from "react";
import axiosInstance from "axios";


const Contests = () => {
    const [users, setUser] = useState(
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
        .then((data)=> setUser(data))






    return (
        <table>
        <tr className='dates'>
            <th>Participant</th>
            <th>Score</th>
        </tr>

           { users.map((user) => (
                <tr>{user.username}</tr>

            ))

            }

        </table>
    )
}
export default Contests;
