import React from 'react'
import { Footer, Nav } from '../Home/Home'
import './about.scss'

function About() {
  return (
    <div className='about-container'>
        <Nav active='about'/>
        <div className="details">
            <p>
            I am a skilled web developer with a passion for creating dynamic and engaging web applications. With expertise in <strong>React JS, C# and SQL with studying php</strong>, I am committed to working and learning on my own.
            </p>
            <p>My interest in web development started during my college years, where I studied computer science and discovered my love for coding. Since then, I kept working and trying to produce websites, ranging from building real estate websites to expense tracking app.</p>
            <p>Besides my technical skills, I pride myself on being an excellent communicator and collaborator. My ability to explain technical concepts in plain language helps in making other people around me to understand</p>
            <p>When I'm not coding, I enjoy playing sports, traveling, and reading. I'm always looking for new ways to challenge myself and learn new skills, both personally and professionally.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default About