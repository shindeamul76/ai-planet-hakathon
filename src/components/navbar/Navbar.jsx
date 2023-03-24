import React from 'react'
import './navbar.css'
import Ailogo from '../../img/Ailogo.png'

const Navbar = () => {
  return (
    <>
      <div className='navbar__container'>
        <section className='navbar__container-logo'>
          <img src={Ailogo} alt="logo" />
        </section>
      </div>
    </>
  )
}

export default Navbar
