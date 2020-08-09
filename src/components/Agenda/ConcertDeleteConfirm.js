import React from 'react'
import PropTypes from 'prop-types'
import closeImg from '../../images/close.png'

const ConcertDeleteConfirm = ({ close }) => (
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

ConcertDeleteConfirm.propTypes = {
  close: PropTypes.func
}

export default ConcertDeleteConfirm
