import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Concert from './Concert'
import ConcertForm from './ConcertForm'
import Title from '../Title'

import './Agenda.css'
import plus from '../../images/plus.png'

const Agenda = () => {
  const [concerts, setConcerts] = useState(null)
  const [openForm, setOpenForm] = useState(false)
  const [mode, setMode] = useState(null)
  const [idEdit, setIdEdit] = useState(null)

  const createForm = () => {
    setMode('create')
    setOpenForm(true)
  }

  const editForm = (e) => {
    setMode('update')
    setIdEdit(e.target.id)
    setOpenForm(true)
  }

  const closeForm = () => {
    setMode(null)
    setIdEdit(null)
    setOpenForm(false)
  }

  const deleteConcert = (e) => {
    setMode('delete')
    axios.delete(`/api/concerts/${e.target.id}`)
    .then(setOpenForm(true))
  }

  const getConcerts = () => {
    axios.get('/api/concerts')
      .then(res => setConcerts(res.data))
  }

  useEffect(() => getConcerts(), [])

  return concerts === null ? 'Loading' : (
    <div className='Agenda-container'>
      <Title title='Agenda' />
      <div className='Agenda-grid'>
        {concerts.map(concert => <Concert concert={concert} editConcert={editForm} deleteConcert={deleteConcert} />)}
      </div>
      <img className='Agenda-add' src={plus} alt='ajouter concert' onClick={createForm} />
      {openForm ? <ConcertForm mode={mode} close={closeForm} idEdit={idEdit} /> : null }
    </div>
  )
}

export default Agenda