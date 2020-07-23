import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Button from './Button'

import './ConcertForm.css'
import { dateConvert } from './utils'

const ConcertForm = () => {
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
    axios.post('/api/concerts', {
      date: e.target.date.value,
      time: e.target.time.value,
      id_location: e.target.id_location.value,
      id_project: e.target.id_project.value
    })
    .then(setSuccess(true))
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

  useEffect(() => getProjects(), [])
  useEffect(() => getCities(), [])
  useEffect(() => getLocations(), [city])


  return projects === null || cities === null ? 'Loading' : (
    <form className='ConcertForm-container' onSubmit={handleSubmit}>
      <label htmlFor='date'>Date</label>
      <input id="date" type="date" name='date' onChange={handleChange} />
      <label htmlFor='time'>Heure</label>
      <input id="time" type="time" name='time' onChange={handleChange} />
      <label htmlFor='City'>Ville</label>
      <select name='city' onChange={handleChange}>
        <option value=''>Choisis une ville</option>
        {cities.map(city => <option value={city.name}>{city.name}</option>)}
      </select>
      { city === null ? '' :
      (
        <>
          <label htmlFor='location'>Lieu</label>
          <select name='id_location' onChange={handleChange}>
            <option value=''>Choisis un lieu</option>
            {locations.map(location => <option value={location.id}>{location.concert_hall}</option>)}
          </select>
        </>)
      }
      <label htmlFor='Project'>Projet</label>
      <select name='id_project' onChange={handleChange}>
        <option value=''>Choisis un projet</option>
        {projects.map(project => <option value={project.id}>{project.title}</option>)}
      </select>
      <Button text='AJOUTER' yellow type='submit' />
      {success ? <p>Le concert a bien été ajouté</p> : null}
    </form>
  )
}

export default ConcertForm