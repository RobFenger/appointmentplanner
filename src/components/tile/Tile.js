import React from "react";

export const Tile = (props) => {
  const value = props.value;
  const removeItem = props.removeItem;
  const objectValuesArray = Object.values(value);

 

  return (
    <div className="tile-container">
      {/* loop through objectValuesArray to get all values (from Contact or Appointment) into a Tile*/}
      {
        objectValuesArray.map((objectValue, index) => {
          //removebutton connected to removeItem (contactspage.js or appointmentspage.js depending on what needs to be removed)
          if (index === 0) {
            return <><button onClick={() => removeItem(objectValue)}>X</button><p key={index} className='tile-title'>{objectValue}</p></>
          } else {
            return <p key={index} className='tile'>{objectValue}</p>
          } 
        })
        }
        
    </div>
  );
};
