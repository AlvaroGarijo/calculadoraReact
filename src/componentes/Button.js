import React from 'react'
import '../styles/Button.css'

export const Button = (props) => {
  
  const isOperation = value => {
      return isNaN(value) && (value !== '.') && (value !== '=')
  };
  
    return (
      <div
        className={`button-container ${isOperation(props.children) ? 'operator' : null}`}
        onClick={() => props.handleClick(props.children)}>
            {props.children}
      </div>
  );
}
