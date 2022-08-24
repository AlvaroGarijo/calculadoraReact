import React from 'react'
import freeCodeCampLogo from '../imagenes/freeCodeCampLogo.png'
import '../styles/Logo.css'

export const LogoFreeCodeCamp = () => {
  return (
    <div className='freecodecampLogo-container'>
        <img
          className='freecodecampLogo'
          src={freeCodeCampLogo}
          alt='Logo freeCodeCamp'/>
      </div>
  )
}
