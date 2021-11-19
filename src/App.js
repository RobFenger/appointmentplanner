import React, { useState, useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  state variables for contacts and appointments 
  */

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || []);
  const [appointments, setAppointments] = useState(JSON.parse(localStorage.getItem('appointments')) || []);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments])

  /*
  functions to add data to contacts and appointments
  */

  const addContact = (name, phone, email) => {
    setContacts((prev) => [...prev, {name, phone, email}])
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments((prev) => [...prev, {title, contact, date, time}])
  };
 


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
          {/*<Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
  </Route>*/}
          <Route path={ROUTES.CONTACTS}>
            
            <ContactsPage addContact={addContact} contacts={contacts} setContacts={setContacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            
            <AppointmentsPage addAppointment={addAppointment} appointments={appointments} setAppointments={setAppointments} contacts={contacts} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
