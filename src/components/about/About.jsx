import React from 'react'
import './about.css'
import ME from '../../assets/fotocv.png'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Hello, I'm Daniel and I currently work as a Junior Back-End Developer (1+ years of experience). I mainly develop microservices using Java Spring Boot but I'm always willing to learn new things. In my free time I also learned some Front-End and Game Development in Unity 3D. If you want to know more about me or want to work together feel free to contact me! 
          </p>
          <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
