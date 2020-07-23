import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Concert from './Concert'
import ConcertForm from './ConcertForm'
import Title from './Title'

import './Agenda.css'
import plus from '../images/plus.png'

const Agenda = () => {
  const [concerts, setConcerts] = useState(null)

  const getConcerts = () => {
    axios.get('/api/concerts')
      .then(res => setConcerts(res.data))
  }

  useEffect(() => getConcerts(), [])

  return concerts === null ? 'Loading' : (
    <div className='Agenda-container'>
      <Title title='Agenda' />
      <div className='Agenda-grid'>
        {concerts.map(concert => <Concert concert={concert} />)}
      </div>
      <img className='Agenda-add' src={plus} alt='ajouter concert' />
      <ConcertForm />
    </div>
  )
}

export default Agenda