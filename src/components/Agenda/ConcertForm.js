import React from 'react'

import Button from './Button'

import './ConcertForm.css'
import closeImg from '../../images/close.png'

const ConcertForm = ({
  mode,
  close,
  concert,
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
  if (mode === 'delete') {
    return (
      <div className="ConcertForm-container">
        <form className="ConcertForm-form">
          <img
            className="ConcertForm-close"
            src={closeImg}
            alt="close formulaire"
            onClick={close}
          />
          <p>Le concert a bien été supprimé</p>
        </form>
      </div>
    )
  } else {
    return projects === null || cities === null ? (
      'Loading'
    ) : (
      <div className="ConcertForm-container">
        <form className="ConcertForm-form" onSubmit={handleSubmit}>
          <img
            className="ConcertForm-close"
            src={closeImg}
            alt="close formulaire"
            onClick={close}
          />
          {mode === 'create' ? (
            <h2>Ajout d&apos;un concert</h2>
          ) : (
            <h2>Modification d&apos;un concert</h2>
          )}
          <label htmlFor="date">Date</label>
          {mode === 'create' ? (
            <input id="date" type="date" name="date" onChange={handleChange} />
          ) : (
            <input
              id="date"
              type="date"
              name="date"
              value={form.date || concert.date}
              onChange={handleChange}
            />
          )}
          <label htmlFor="time">Heure</label>
          {mode === 'create' ? (
            <input id="time" type="time" name="time" onChange={handleChange} />
          ) : (
            <input
              id="time"
              type="time"
              name="time"
              onChange={handleChange}
              value={form.time || concert.time}
            />
          )}

          <label htmlFor="City">Ville</label>
          <select name="city" onChange={handleChange}>
            {mode === 'create' ? (
              <option value="">Choisis une ville</option>
            ) : (
              <option value={concert.city}>{concert.city}</option>
            )}
            {cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
          {city === null ? (
            ''
          ) : locations === null ? (
            'loading'
          ) : (
            <>
              <label htmlFor="location">Lieu</label>
              <select name="id_location" onChange={handleChange}>
                {mode === 'create' ? (
                  <option value="">Choisis un lieu</option>
                ) : (
                  <option value={concert.id_location}>
                    {concert.concert_hall}
                  </option>
                )}
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.concert_hall}
                  </option>
                ))}
              </select>
            </>
          )}
          <label htmlFor="Project">Projet</label>
          <select name="id_project" onChange={handleChange}>
            {mode === 'create' ? (
              <option value="">Choisis un projet</option>
            ) : (
              <option value={concert.id_project}>{concert.project}</option>
            )}
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.title}
              </option>
            ))}
          </select>
          {mode === 'create' ? (
            <Button text="AJOUTER" yellow type="submit" />
          ) : (
            <Button text="ENREGISTRER LES MODIFICATIONS" yellow type="submit" />
          )}
          {success ? (
            mode === 'create' ? (
              <p>Le concert a bien été ajouté</p>
            ) : (
              <p>Le concert a bien été modifié</p>
            )
          ) : null}
        </form>
      </div>
    )
  }
}

export default ConcertForm
