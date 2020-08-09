import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import ConcertForm from './ConcertForm'

const ConcertFormContainer = ({ mode, close, idEdit, afterCreate }) => {
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
    const { name, value: valueStr } = e.target
    if (name === 'city') {
      setCity(valueStr)
    } else {
      const value = ['id_location', 'id_project'].includes(name)
        ? Number(valueStr)
        : valueStr
      setForm({ ...form, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (mode === 'create') {
      axios.post('/api/concerts', form).then((res) => {
        setSuccess(true)
        afterCreate(res.data)
      })
    } else if (mode === 'update') {
      axios.put(`/api/concerts/${idEdit}`, form).then(() => setSuccess(true))
    }
  }

  const getConcert = () => {
    if (!idEdit) {
      return
    }
    axios.get(`/api/concerts/${idEdit}`).then((res) => {
      const {
        date,
        time,
        id_location: idLocation,
        id_project: idProject
      } = res.data
      const nextForm = {
        date,
        time,
        id_location: idLocation,
        id_project: idProject
      }
      setForm(nextForm)
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
    if (!city) {
      setLocations(null)
      return
    }
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
      form={form}
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

ConcertFormContainer.propTypes = {
  mode: PropTypes.oneOf(['create', 'update']),
  close: PropTypes.func,
  idEdit: PropTypes.string,
  afterCreate: PropTypes.func
}

export default ConcertFormContainer
