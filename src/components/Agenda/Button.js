import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ text, yellow }) => {
  return (
    <button className={`Button-container ${yellow ? 'yellow' : 'black'}`}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  yellow: PropTypes.bool
}

export default Button
