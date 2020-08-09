import React from 'react'

import './Button.css'

const Button = ({ text, yellow }) => {
  return (
    <button className={`Button-container ${yellow ? 'yellow' : 'black'}`}>
      {text}
    </button>
  )
}

export default Button
