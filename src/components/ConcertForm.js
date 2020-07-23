import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Button from './Button'

import './ConcertForm.css'
import closeImg from '../images/close.png'

const ConcertForm = ({ mode, close, idEdit }) => {
  const [concert, setConcert] = useState(null)
  const [projects, setProjects] = useState(null)
  const [cities, setCities] = useState(null)
  const [locations, setLocations] = useState(null)
  const [city, setCity] = useState(null)
  const [form, setForm] = useState({
    date: null,
    time: null,
    id_project: null,
    id_location: null
  })
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    if (e.target.name === 'city') {
      setCity(e.target.value)
    } else {
      setForm({...form, [e.target.name]:e.target.value})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    if (mode === 'create') {
      axios.post('/api/concerts', {
        date: e.target.date.value,
        time: e.target.time.value,
        id_location: e.target.id_location.value,
        id_project: e.target.id_project.value
      })
      .then(setSuccess(true))
    } else if (mode === 'update') {
        axios.put(`/api/concerts/${idEdit}`, {
          date: e.target.date.value !== concert.date ? e.target.date.value : concert.date,
          time: e.target.time.value !== concert.time ? e.target.time.value : concert.time,
          id_location: e.target.id_location.value !== concert.id_location ? e.target.id_location.value : concert.id_location,
          id_project: e.target.id_project.value !== concert.id_project ? e.target.id_project.value : concert.id_project
        })
        .then(setSuccess(true))
    }
    
  }

  const getConcert = () => {
    axios.get(`/api/concerts/${idEdit}`)
      .then(res => {
        setConcert(res.data)
        setCity(res.data.city)
      })
  }
  const getProjects = () => {
    axios.get('/api/projects')
      .then(res => setProjects(res.data))
  }
  const getCities = () => {
    axios.get('/api/cities')
      .then(res => setCities(res.data))
  }
  const getLocations = () => {
    axios.get(`/api/locations?city=${city}`)
      .then(res => setLocations(res.data))
  }
  useEffect(() => getConcert(), [])
  useEffect(() => getProjects(), [])
  useEffect(() => getCities(), [])
  useEffect(() => getLocations(), [city])

  if (mode === 'delete') {
    return (
      <div className='ConcertForm-container'>
      <form className='ConcertForm-form'>
        <img className='ConcertForm-close' src={closeImg} alt='close formulaire' onClick={close} />
        <p>Le concert a bien été supprimé</p>
      </form>
    </div>
    )
  } else {
    return projects === null || cities === null ? 'Loading' : (
      <div className='ConcertForm-container'>
        <form className='ConcertForm-form' onSubmit={handleSubmit}>
          <img className='ConcertForm-close' src={closeImg} alt='close formulaire' onClick={close} />
          {mode === 'create' ? <h2>Ajout d'un concert</h2> : <h2>Modification d'un concert</h2>}
          {console.log('concert',concert)}
          {console.log('form',form)}
          <label htmlFor='date'>Date</label>
          {
            mode === 'create' ? 
            <input id="date" type="date" name='date' onChange={handleChange} /> 
            : 
            <input id="date" type="date" name='date' value={form.date || concert.date} onChange={handleChange} />
          }
          <label htmlFor='time'>Heure</label>
          {
            mode === 'create' ?
            <input id="time" type="time" name='time' onChange={handleChange} />
            :
            <input id="time" type="time" name='time' onChange={handleChange} value={form.time || concert.time}/>
          }
          
          <label htmlFor='City'>Ville</label>
          <select name='city' onChange={handleChange}>
            {
              mode === 'create' ?
              <option value=''>Choisis une ville</option>
              :
              <option value={concert.city}>{concert.city}</option>
            }
            {cities.map(city => <option value={city.name}>{city.name}</option>)}
          </select>
          { city === null ? '' : locations === null ? 'loading' :
          (
            <>
              <label htmlFor='location'>Lieu</label>
              <select name='id_location' onChange={handleChange}>
                {
                  mode === 'create' ?
                  <option value=''>Choisis un lieu</option>
                  :
                  <option value={concert.id_location}>{concert.concert_hall}</option>
                }
                {locations.map(location => <option value={location.id}>{location.concert_hall}</option>)}
              </select>
            </>)
          }
          <label htmlFor='Project'>Projet</label>
          <select name='id_project' onChange={handleChange}>
          {
              mode === 'create' ?
              <option value=''>Choisis un projet</option>
              :
              <option value={concert.id_project}>{concert.project}</option>
            }
            {projects.map(project => <option value={project.id}>{project.title}</option>)}
          </select>
          {mode === 'create' ? <Button text='AJOUTER' yellow type='submit' /> : <Button text='ENREGISTRER LES MODIFICATIONS' yellow type='submit' />}
          {success ? mode === 'create' ? <p>Le concert a bien été ajouté</p> : <p>Le concert a bien été modifié</p> : null}
        </form>
      </div>
    )
  }
}

export default ConcertForm