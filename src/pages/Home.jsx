import React from 'react'
import { Link } from 'react-router-dom'
import About from '../components/About'
import Nav from '../components/Nav'
import Skills from '../components/Skills'

function Home() {
  return (<>
  <Nav/>
  <About/>
  <div className='call_to_action'>
    <Link to='/projects' >Get Started</Link>
  </div>  
  <Skills/>
  </>)
}

export default Home