import React, { useState, useEffect } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  //get the props from app.js into easy to handle variables
  const contacts = props.contacts;
  const addContact = props.addContact;
  const setContacts = props.setContacts;

  //Define state variables for contact info and duplicate check
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  
  
  //contact info and clear data if the contact name is not a duplicate  
  const handleSubmit = (e) => {
    e.preventDefault();
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

  
  //check for contact name in the contacts array variable in props
  useEffect(() => {
    if (contacts.some(obj => name === obj.name)) {
      setDuplicate(true);
    }
    return;
  }, [contacts, name]);
  
  //function to filter out the contact from state and update the localStorage
  const removeItem = (contactToRemove) => {
    setContacts(prev => (prev.filter(item => item.name !== contactToRemove)));
    localStorage.setItem('contacts', JSON.stringify(props.contacts));
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {/* connect contactform to handlesubmit function */}
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
