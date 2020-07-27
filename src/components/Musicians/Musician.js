import React from 'react'

import './Musician.css'

const Musician = ({ musician }) => {
  return (
    <div className='Musician-container'>
      <img src={`http://localhost:8000/${musician.photo}`} className='Musician-photo'/>
      <p className='Musician-name'>{musician.firstname}</p>
      <p className='Musician-name'>{musician.lastname}</p>
      <p className='Musician-instrument'>{musician.instrument}</p>
    </div>
  )
}

export default Musician
