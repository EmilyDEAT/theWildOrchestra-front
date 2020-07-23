import React from 'react'
import { dateConvert } from '../utils';

import Button from './Button'

import './Concert.css'
import editImg from '../../images/edit.png'
import deleteImg from '../../images/delete.png'

const Concert = ({ concert, editConcert, deleteConcert }) => {
  return (
    <div className='Concert-container'>
      <div className='Concert-info'>
        <p className='Concert-date'><strong>{dateConvert(concert.date)}</strong> - {concert.time}</p>
        <p className='Concert-location'><em>{concert.city}</em> - {concert.concert_hall}</p>
        <p className='Concert-project'>{concert.project}</p>
        <img className='Concert-edit' src={editImg} alt='modifier un concert' id={concert.id} onClick={editConcert} />
        <img className='Concert-delete' src={deleteImg} alt='supprimer un concert' id={concert.id} onClick={deleteConcert} />
      </div>
      <Button text='Réserver' yellow />
    </div>
  )
}

export default Concert