import React from 'react'

export const Button = (props) => {
  
  const isOperation = value => {
      return isNaN(value) && (value != '.') && (value != '=')
  };
  
  
  
    return (
    <div
    className={`button-container ${isOperation(props.children) ? 'operator' : null}`}>
        {props.children}
    </div>
  );
}
