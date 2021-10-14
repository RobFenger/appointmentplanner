import React from "react";

export const Tile = (props) => {
  const value = props.value;
  const removeItem = props.removeItem;
  const objectValuesArray = Object.values(value);

 

  return (
    <div className="tile-container">
      
      {
        objectValuesArray.map((objectValue, index) => {
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
