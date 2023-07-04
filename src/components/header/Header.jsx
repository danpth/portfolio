import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/fotocv.png'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__container">
          <h5>
            Hello I'm 
          </h5>
          <h1>
            Daniel Choma
          </h1>
          <h5 className="text-light">
            Back-End Developer
          </h5>
          <CTA/>
          <HeaderSocials/>
          <div className="me">
            <img src={ME} alt="me" />
          </div>
          <a href="#contacts" className='scroll__down'>Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header
