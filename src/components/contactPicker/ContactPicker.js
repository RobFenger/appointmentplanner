import React from "react";

export const ContactPicker = (props) => {
  const contacts = props.contacts;
  const onChange = props.onChange;
  return (
    //get the contacts into the contactpicker at the appointmentspage
    <select onChange={onChange}>
      <option value=''>--no contact selected--</option>
      {contacts.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
    </select>
  );
};