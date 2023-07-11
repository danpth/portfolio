import React from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Experience from './components/experience/Experience'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Contacts/>
        <Footer/>
    </>
    
  )
}

export default App
