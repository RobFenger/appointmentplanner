import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = (props) => {
  const data = props.data;
  const removeItem = props.removeItem;
 
  
  return (
    <div>
      {data.map((object, index) => <Tile value={object} key={index} removeItem={removeItem} />)}
    </div>
  );
};