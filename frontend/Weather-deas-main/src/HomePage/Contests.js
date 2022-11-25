import { Fragment, useEffect, useState} from "react";
import axiosInstance from "axios";


const Contests = () => {
    const [contests, setContests] = useState(
        []
    );
	const token = localStorage.getItem('access_token');
    const response = fetch("http://localhost:8000/api/detail/", {
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
    ;




    return (
        <div className='dates'>
            {contests.map((contest) => (
                <p>{contest.slug}</p>
            ))

            }
        </div>
    )
}
export default Contests;
