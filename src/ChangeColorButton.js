import React from 'react';

 export const ChangeColorButton = ({ onClick, currentColor }) => {
  
  const handleClick = () => {
      onClick();
  }
  
    return (
      <button onClick={handleClick}>I don't like {currentColor}</button>
    );
  }


