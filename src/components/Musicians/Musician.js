import React from 'react'
import PropTypes from 'prop-types'
import './Musician.css'

const Musician = ({ musician }) => {
  return (
    <div className="Musician-container">
      <img
        src={`http://localhost:8000/${musician.photo}`}
        className="Musician-photo"
      />
      <p className="Musician-name">{musician.firstname}</p>
      <p className="Musician-name">{musician.lastname}</p>
      <p className="Musician-instrument">{musician.instrument}</p>
    </div>
  )
}

Musician.propTypes = {
  musician: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    instrument: PropTypes.string,
    photo: PropTypes.string
  })
}

export default Musician
