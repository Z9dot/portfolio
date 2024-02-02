import React from 'react'
import './about.css'
import Photo from '../../assets/Zain.jpg'
const About = () => {
  return (
    <div className='about__section'>
      <div className='about_section_image'>
        <img src={Photo} alt='Zain' />
      </div>
      <div className='about__section__description'>
        <h3>About Me</h3>
        <h1>Zain Hashmi</h1>
        <p>
          Currently, I am pursuing a degree in Software Engineering from Comsats
          University Islamabad. With a strong skill set and the urge to learn
          new things, I want to be a part of the industry where I can utiize my
          skill and energy to solve real life problems and learn new things.
          This is my portfolio site to introduce myself.
        </p>
        <div className='my__skills'>
        <h2>My Skills</h2>
        <div className='programming'>
          <button>Python</button>
          <button>Java</button>
          <button>HTML</button>
          <button>CSS</button>
          <button>JavaScript</button>
          </div>
        <div className='mern__stack'>
          <button>MongoDB</button>
          <button>Express</button>
          <button>React</button>
          <button>Node</button>
          </div>
          
      </div>
      </div>
      
    </div>
  )
}

export default About
