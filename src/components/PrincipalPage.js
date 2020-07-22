import React from 'react'

import Header from './Header'
import Presentation from './Presentation'

import './PrincipalPage.css'

const PrincipalPage = () => {
  return (
    <div className='PrincipalPage-container'>
      <Header />
      <Presentation />
    </div>
  )
}

export default PrincipalPage