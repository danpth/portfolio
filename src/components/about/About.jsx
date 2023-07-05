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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex totam temporibus repudiandae suscipit voluptas placeat a numquam laudantium vero. Rem sed eaque nulla quo modi veniam quis vitae quaerat repudiandae sit autem esse molestiae illum corrupti beatae temporibus at error asperiores cum omnis, tempore ex doloribus qui laboriosam. Ipsum.</p>
          <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
