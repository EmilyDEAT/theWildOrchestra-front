import React from 'react'

import './Presentation.css'
import orchestra from '../images/orchestra.jpg'

const Presentation = () => {
  return (
    <div className='Presentation-container'>
      <img className='Presentation-image' src={orchestra} alt='orchestra' />
      <p className='Presentation-text'>The Wild Orchestra réunit chanteurs et instrumentistes sous la direction de la violoniste Patricia Beauchamp. Il tisse des liens entre la musique et les autres arts.</p>
    </div>
  )
}

export default Presentation