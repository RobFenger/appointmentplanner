import React, { useState, useEffect } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const contacts = props.contacts;
  const addContact = props.addContact;
  const setContacts = props.setContacts;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    contact info and clear data
    if the contact name is not a duplicate
    */

    if (duplicate === false) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    } else  {
      setName('');
      setPhone('');
      setEmail('');
      setDuplicate(false);
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (contacts.some(obj => name === obj.name)) {
      setDuplicate(true);
    }
    return;
  });
  
  const removeItem = (contactToRemove) => {
    setContacts(prev => (prev.filter(item => item.name !== contactToRemove)));
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} removeItem={removeItem}/> 
      </section>
    </div>
  );
};
