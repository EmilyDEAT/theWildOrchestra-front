import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ConcertForm from './ConcertForm'

const ConcertFormContainer = ({ mode, close, idEdit }) => {
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
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    if (mode === 'create') {
      axios
        .post('/api/concerts', {
          date: e.target.date.value,
          time: e.target.time.value,
          id_location: e.target.id_location.value,
          id_project: e.target.id_project.value
        })
        .then(setSuccess(true))
    } else if (mode === 'update') {
      axios
        .put(`/api/concerts/${idEdit}`, {
          date:
            e.target.date.value !== concert.date
              ? e.target.date.value
              : concert.date,
          time:
            e.target.time.value !== concert.time
              ? e.target.time.value
              : concert.time,
          id_location:
            e.target.id_location.value !== concert.id_location
              ? e.target.id_location.value
              : concert.id_location,
          id_project:
            e.target.id_project.value !== concert.id_project
              ? e.target.id_project.value
              : concert.id_project
        })
        .then(setSuccess(true))
    }
  }

  const getConcert = () => {
    axios.get(`/api/concerts/${idEdit}`).then((res) => {
      setConcert(res.data)
      setCity(res.data.city)
    })
  }
  const getProjects = () => {
    axios.get('/api/projects').then((res) => setProjects(res.data))
  }
  const getCities = () => {
    axios.get('/api/cities').then((res) => setCities(res.data))
  }
  const getLocations = () => {
    axios
      .get(`/api/locations?city=${city}`)
      .then((res) => setLocations(res.data))
  }
  useEffect(() => getConcert(), [])
  useEffect(() => getProjects(), [])
  useEffect(() => getCities(), [])
  useEffect(() => getLocations(), [city])

  return (
    <ConcertForm
      mode={mode}
      close={close}
      idEdit={idEdit}
      concert={concert}
      projects={projects}
      cities={cities}
      city={city}
      locations={locations}
      success={success}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default ConcertFormContainer
