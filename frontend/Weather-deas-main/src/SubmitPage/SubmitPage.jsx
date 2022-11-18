import React from 'react';
import './SubmitPage.css';
import Navbar from '../NavBar/NavBar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';



function SubmitPage() {
    return(
        <>
        <Navbar />
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        
        />
        </>
    )
}











export default SubmitPage;