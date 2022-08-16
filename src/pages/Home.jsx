import React from 'react'
import { Link } from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact'
import Nav from '../components/Nav'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Experiences from '../components/Experiences'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Nav />
      <About />
      <div className="call_to_action">
        <Link to="" onClick={() => window.location.replace('/#projects')}>
          Get Started
        </Link>
      </div>
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
      <Footer/>
    </>
  )
}

export default Home
