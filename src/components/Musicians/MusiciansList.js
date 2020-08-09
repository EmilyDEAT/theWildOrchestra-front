import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Title from '../Title'
import Musician from './Musician'
import MusicianForm from './MusicianForm'

import './MusiciansList.css'
import plus from '../../images/plus.png'

const MusiciansList = () => {
  const [musicians, setMusicians] = useState(null)
  const [openForm, setOpenForm] = useState(false)

  const createForm = () => {
    setOpenForm(true)
  }

  const closeForm = () => {
    setOpenForm(false)
  }

  const getMusicians = () => {
    axios.get('/api/musicians').then((res) => setMusicians(res.data))
  }

  useEffect(() => getMusicians(), [])

  return musicians === null ? (
    'Loading'
  ) : (
    <div className="MusiciansList-container">
      <Title title="Musiciens" />
      <div className="MusiciansList-grid">
        {musicians.map((musician) => (
          <Musician musician={musician} />
        ))}
      </div>
      <img
        className="Musician-add"
        src={plus}
        alt="ajouter musicien"
        onClick={createForm}
      />
      {openForm ? <MusicianForm close={closeForm} /> : null}
    </div>
  )
}

export default MusiciansList
