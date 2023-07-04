import React from 'react'
import './nav.css'
import {HiHome} from 'react-icons/hi'
import {FaUser} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import {SiBookstack} from 'react-icons/si'
import {MdMessage} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><HiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><FaUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><MdWork/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active' : ''}><SiBookstack/></a>
      <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav==='#contacts' ? 'active' : ''}><MdMessage/></a>
    </nav>
  )
}

export default Nav
