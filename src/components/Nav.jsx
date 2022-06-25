import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../image/LogoMakr-90dcjZ.png'

function Nav() {
  return (<div className='nav'>
      <img src={logo} alt="logo" className='logo'/>
      <div className="nav_list">
          <Link to='/'>Home</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='' onClick={() => window.location.replace("/#about")}>About</Link>
          <Link to='' onClick={() => window.location.replace("/#contact")}>Contact</Link>
      </div>
  </div>)
}

export default Nav