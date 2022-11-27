import React from 'react';
import './SubmitPage.css';
import Navbar from '../NavBar/NavBar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
//import interactionPlugin from "@fullcalendar/interaction";
import { useNavigate } from 'react-router';
import SubmitForm from "../SubmitForm/SubmitForm";


function SubmitPage() {
    const navigate = useNavigate();
    return(
        <>
        <Navbar />
        <FullCalendar
        plugins={[ dayGridPlugin, ]}
        eventContent={renderEventContent}/*USE FORM HOOKS TO PUT FORM IN DATES */
        initialView="dayGridMonth"
        headerToolbar={{
            left:'prev,next today',
            center:'title',
            right:'dayGridMonth,dayGridWeek,dayGridDay',
                }}
        weekends={false}
        navLinks={true}
        navLinkDayClick={()=>navigate("/SubmitForm")}
        />
        </>
    )
}




function renderEventContent(eventInfo) {/*USE FORM HOOKS TO PUT FORM IN DATES */
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>

      </>
    )
  }









export default SubmitPage;