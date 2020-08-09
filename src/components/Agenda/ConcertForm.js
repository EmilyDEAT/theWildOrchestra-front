import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

import './ConcertForm.css'
import closeImg from '../../images/close.png'

const modeTextMap = {
  create: {
    formTitle: "Ajout d'un concert",
    submitBtnLabel: 'AJOUTER',
    successMessage: 'Le concert a bien été ajouté'
  },

  update: {
    formTitle: "Modification d'un concert",
    submitBtnLabel: 'ENREGISTRER LES MODIFICATIONS',
    successMessage: 'Le concert a bien été modifié'
  }
}

const ConcertForm = ({
  mode,
  close,
  projects,
  cities,
  city,
  locations,
  form,
  handleChange,
  handleSubmit,
  success,
  idEdit
}) => {
  if (projects === null || cities === null) {
    return 'Loading'
  }
  const texts = modeTextMap[mode]

  return (
    <div className="ConcertForm-container">
      <form className="ConcertForm-form" onSubmit={handleSubmit}>
        <img
          className="ConcertForm-close"
          src={closeImg}
          alt="close formulaire"
          onClick={close}
        />
        <h2>{texts.formTitle}</h2>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={form.date || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor="time">Heure</label>
        <input
          id="time"
          type="time"
          name="time"
          onChange={handleChange}
          value={form.time || ''}
          required
        />

        <label htmlFor="City">Ville</label>
        <select name="city" onChange={handleChange} value={city || ''} required>
          <option value="">Choisis une ville</option>
          {cities.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        <label htmlFor="location">Lieu</label>
        <select
          name="id_location"
          onChange={handleChange}
          disabled={city === null || locations === null}
          value={form.id_location || ''}
          required
        >
          <option value="">Choisis un lieu</option>
          {locations &&
            locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.concert_hall}
              </option>
            ))}
        </select>
        <label htmlFor="Project">Projet</label>
        <select
          name="id_project"
          onChange={handleChange}
          value={form.id_project || ''}
          required
        >
          <option value="">Choisis un projet</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.title}
            </option>
          ))}
        </select>
        <Button text={texts.submitBtnLabel} yellow type="submit" />
        {success && <p>{texts.successMessage}</p>}
      </form>
    </div>
  )
}

ConcertForm.propTypes = {
  mode: PropTypes.string,
  close: PropTypes.func,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string
    })
  ),
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  ),
  city: PropTypes.string,
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      concert_hall: PropTypes.string
    })
  ),
  form: PropTypes.shape({
    date: PropTypes.string,
    time: PropTypes.string,
    id_location: PropTypes.number,
    id_project: PropTypes.number
  }),
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  success: PropTypes.bool,
  idEdit: PropTypes.string
}

export default ConcertForm
