import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar__container'>
        <div className='name__section'>
            <h1>Zain Hashmi</h1>
        </div>
        <div className='navbar__menu'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Services</a>
            <a href='#'>Contact</a>
        </div> 
    </div>
  )
}
export default Navbar
