import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Button from '../Agenda/Button'

import './MusicianForm.css'
import closeImg from '../../images/close.png'

const MusicianForm = ({ close }) => {
  const [photo, setPhoto] = useState('')
  const [instruments, setInstruments] = useState(null)
  const [form, setForm] = useState({
    firstname: null,
    lastname: null,
    id_instrument: null
  })
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onFileChange = (e) => {
    setPhoto(e.target.files[0])
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('firstname', form.firstname)
    data.append('lastname', form.lastname)
    data.append('id_instrument', form.id_instrument)
    data.append('photo', photo)
    axios.post('api/musicians', data).then(setSuccess(true))
  }

  const getInstruments = () => {
    axios.get('/api/instruments').then((res) => setInstruments(res.data))
  }
  useEffect(() => getInstruments(), [])

  return instruments === null ? (
    'Loading'
  ) : (
    <div className="MusicianForm-container">
      <form className="MusicianForm-form" onSubmit={onSubmit}>
        <img
          className="MusicianForm-close"
          src={closeImg}
          alt="close formulaire"
          onClick={close}
        />
        <h2>Ajout d'un musicien</h2>
        <label htmlFor="Fistname">Prénom</label>
        <input type="text" name="firstname" onChange={handleChange} />
        <label htmlFor="Lastname">Nom</label>
        <input type="text" name="lastname" onChange={handleChange} />
        <label htmlFor="Project">Instrument</label>
        <select name="id_instrument" onChange={handleChange}>
          <option value="">Choisis un instrument</option>
          {instruments.map((instru) => (
            <option value={instru.id}>{instru.instrument}</option>
          ))}
        </select>
        <input type="file" onChange={onFileChange} />
        <Button text="AJOUTER" yellow type="submit" />
        {success ? <p>Le concert a bien été ajouté</p> : null}
      </form>
    </div>
  )
}

export default MusicianForm
