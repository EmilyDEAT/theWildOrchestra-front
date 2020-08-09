import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Concert from './Concert'
import ConcertFormContainer from './ConcertFormContainer'
import ConcertDeleteConfirm from './ConcertDeleteConfirm'
import Title from '../Title'
import { sortConcertsByDate } from '../utils'

import './Agenda.css'
import plus from '../../images/plus.png'

const modeComponentMap = {
  create: ConcertFormContainer,
  update: ConcertFormContainer,
  delete: ConcertDeleteConfirm
}

const Agenda = () => {
  const [concerts, setConcerts] = useState(null)
  const [mode, setMode] = useState(null)
  const [idEdit, setIdEdit] = useState(null)

  const createForm = () => {
    setMode('create')
  }

  const editForm = (e) => {
    setMode('update')
    setIdEdit(e.target.id)
  }

  const closeForm = () => {
    setMode(null)
    setIdEdit(null)
  }

  const deleteConcert = (e) => {
    axios.delete(`/api/concerts/${e.target.id}`).then(() => setMode('delete'))
  }

  const getConcerts = () => {
    axios.get('/api/concerts').then((res) => setConcerts(res.data))
  }

  const addConcert = (newConcert) => {
    setConcerts((prevConcerts) => {
      const nextConcerts = [...prevConcerts, newConcert]
      nextConcerts.sort(sortConcertsByDate)
      return nextConcerts
    })
  }

  const updateConcert = (updatedConcert) => {
    setConcerts((prevConcerts) => {
      const nextConcerts = prevConcerts.map(concert => concert.id === updatedConcert.id ? updatedConcert : concert)
      nextConcerts.sort(sortConcertsByDate)
      return nextConcerts
    })
  }

  useEffect(() => getConcerts(), [])

  if (concerts === null) {
    return 'Loading'
  }

  const ModalComponent = modeComponentMap[mode]
  return (
    <div className="Agenda-container">
      <Title title="Agenda" />
      <div className="Agenda-grid">
        {concerts.map((concert) => (
          <Concert
            key={concert.id}
            concert={concert}
            editConcert={editForm}
            deleteConcert={deleteConcert}
          />
        ))}
      </div>
      <img
        className="Agenda-add"
        src={plus}
        alt="ajouter concert"
        onClick={createForm}
      />
      {mode && (
        <ModalComponent
          mode={mode}
          close={closeForm}
          idEdit={idEdit}
          afterCreate={addConcert}
          afterUpdate={updateConcert}
        />
      )}
    </div>
  )
}

export default Agenda
