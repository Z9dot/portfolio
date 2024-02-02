import React from 'react'
import './about.css'
import Photo from '../../assets/Zain.jpg'
const About = () => {
  return (
    <div className='about__section'>
      <div className='about_section_image'>
        <img src={Photo} alt='Zain' />
      </div>
      <div className='about__section_description'>
        <p>Hi! I am Zain Hashmi</p>
        <h1>I'm Mern Stack Developer.</h1>
        <p>
          Currently, I am pursuing a degree in Software Engineering from Comsats
          University Islamabad. With a strong skill set and the urge to learn
          new things, I want to be a part of the industry where I can utiize my
          skill and energy to solve real life problems and learn new things.
          This is my portfolio site to introduce myself.
        </p>
      </div>
    </div>
  )
}

export default About
