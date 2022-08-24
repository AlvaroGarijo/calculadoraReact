import React from 'react'
import '../styles/ButtonReset.css'

export const ButtonReset = (props) => {
  return (
    <div className='button-reset'
         onClick={props.handleClick}>
        {props.children}
    </div>
  )
}
