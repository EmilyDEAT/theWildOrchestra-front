import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Concert from './Concert'
import Title from './Title'

import './Agenda.css'

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
    </div>
  )
}

export default Agenda