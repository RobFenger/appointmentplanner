import React, { useState } from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';


export const AppointmentsPage = (props) => {
  
  //get the props from app.js into easy to handle variables
  const appointments = props.appointments;
  const setAppointments = props.setAppointments;
  const addAppointment = props.addAppointment;
  const contacts = props.contacts;

  //Define state variables for appointment info
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  //function to add appointment info to state variables and clear data
  const handleSubmit = (e) => {
    e.preventDefault();
   addAppointment(title, contact, date, time);
   setTitle('');
   setContact('');
   setDate('');
   setTime('');
  };

  //function to filter out the appointment to remove from the state and update localStorage
  const removeItem = (appointmentToRemove) => {
    setAppointments(prev => (prev.filter(item => item.title !== appointmentToRemove)));
    localStorage.setItem('appointments', JSON.stringify(props.appointments));
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        {/* connect appointmentform with handlesubmit function */}
        <AppointmentForm 
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments} removeItem={removeItem}/>
      </section>
    </div>
  );
};
