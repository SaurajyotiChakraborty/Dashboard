import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import './Calendar.css';
import useCalendar from '../../store/Calendar';
import { createEventId } from '../../data';

const Calendar = () => {
  const { currentEvents, setCurrentEvents } = useCalendar();

  const handleEvents = async (events) => {
    await Promise.resolve(setCurrentEvents(events));
  };



  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a title for the event');
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
  
    if (title) {
      const newEvent = {
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      };
  
      calendarApi.addEvent(newEvent);
  
     
    }
  };
  const handleEventClick = (clickinfo)=>{
    if( 
      confirm('Are you sure you want to delete')
    ){
      clickinfo.event.remove()
    }
  }
  
  return (
    <div className="Calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        initialView="dayGridMonth"
        allDaySlot={false}
        slotDuration="01:00:00"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        nowIndicator={true}
        initialEvents={currentEvents} 
        eventsSet={handleEvents}
        select={handleDateSelect}
        eventClick={handleEventClick}


      />
    </div>
  );
};

export default Calendar;
