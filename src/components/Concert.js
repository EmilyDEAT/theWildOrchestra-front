import React from 'react'
import { dateConvert } from './utils';

import Button from './Button';

import './Concert.css'

const Concert = ({ concert }) => {
  return (
    <div className='Concert-container'>
      <div className='Concert-info'>
        <p className='Concert-date'><strong>{dateConvert(concert.date)}</strong> - {concert.time}</p>
        <p className='Concert-location'><em>{concert.city}</em> - {concert.concert_hall}</p>
        <p className='Concert-project'>{concert.project}</p>
      </div>
      <Button text='Réserver' yellow />
    </div>
  )
}

export default Concert