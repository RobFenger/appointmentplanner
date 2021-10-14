import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        value={name} 
        onChange={({target}) => setName(target.value)}
        placeholder='Contact Name'
      />
      <input 
        type='tel'
        value={phone} 
        onChange={({target}) => setPhone(target.value)}
        placeholder='Phone Number'
        
      />
      <input 
        type='email' 
        value={email} 
        onChange={({target}) => setEmail(target.value)}
        placeholder='E-mail address'
      />
      <input type='submit'/>
    </form>
  );
};