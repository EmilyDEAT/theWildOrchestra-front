import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Title from '../Title'
import Musician from './Musician'

import './MusiciansList.css'

const MusiciansList = () => {
  const [musicians, setMusicians] = useState(null)

  const getMusicians = () => {
    axios.get('/api/musicians')
      .then(res => setMusicians(res.data))
  }

  useEffect(() => getMusicians(),  [])

  return musicians === null ? 'Loading' : (
    <div className='MusiciansList-container'>
      <Title title='Musiciens' />
      <div className='MusiciansList-grid'> 
        {musicians.map(musician => <Musician musician={musician} />)}
      </div>
    </div>
  )
}

export default MusiciansList