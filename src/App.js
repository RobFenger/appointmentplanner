import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  state variables for contacts and appointments 
  */

  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [language, setLanguage] = useState('');

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  functions to add data to contacts and appointments
  */

  const addContact = (name, phone, email) => {
    setContacts((prev) => [...prev, {name, phone, email}])
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments((prev) => [...prev, {title, contact, date, time}])
  };
  
  const toggleLanguage = (lang) => {
    setLanguage(lang);
  }
 
  


  return (
    <>
      <h1>Appointment Planner</h1>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav> 
      
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            
            <ContactsPage addContact={addContact} contacts={contacts} setContacts={setContacts} language={language}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            
            <AppointmentsPage addAppointment={addAppointment} appointments={appointments} setAppointments={setAppointments} contacts={contacts} language={language}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
