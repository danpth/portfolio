import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.avif'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'This is a portfolio item title',
    github: 'https://github.com/danpth/',
    demo: 'https://github.com/danpth/'
  },
  {
    id: 2,
    image: IMG1,
    title: 'This is a portfolio item title',
    github: 'https://github.com/danpth/',
    demo: 'https://github.com/danpth/'
  },
  {
    id: 3,
    image: IMG1,
    title: 'This is a portfolio item title',
    github: 'https://github.com/danpth/',
    demo: 'https://github.com/danpth/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <h3 className='workinprog'>WORK IN PROGRESS</h3>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio