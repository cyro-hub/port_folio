import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import background from '../../assets/Background/background.jpg'
import './home.scss'
import {FaFacebookF,FaLinkedinIn,FaGithub,FaInstagram} from 'react-icons/fa'
import {BiExit} from 'react-icons/bi'

function Home() {
const [size,setSize]=useState(window.innerWidth);
const [showMenu,setShowMenu]=useState(false)

const sizeChecker =()=> setSize(window.innerWidth)

const handleShowMenu =()=>setShowMenu(!showMenu)

useEffect(()=>{
    window.addEventListener('resize',sizeChecker)

    return ()=>window.removeEventListener('resize',sizeChecker)
})

  return (<>
  <div className="home-container">
    <div className="nav">
        <h3>Bartley</h3>{
            size>645?
        <div className="nav-links">
            <Link to='/' className='active'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/services'>Services</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
        </div>:<>{
            showMenu?<>
                <div className="nav-links-hamburger">
                    <Link to='/' className='active'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
                <BiExit size={22} className='exit' onClick={handleShowMenu}/>
            </>:<><BiExit size={22} className='reverse' onClick={handleShowMenu}/></>
            }
            
        </>
        }

    </div>
    <div className="welcome">
        <div className="intro">
            <h1>Hi, I'm CHRIS BARTLEY</h1>
            <h3>Web Developer</h3>
            <p>
            Meet Chris Bartley, a skilled web developer proficient in HTML, CSS, React JS, C#, and MySQL. With a passion for creating dynamic and user-friendly web applications, Chris is committed to delivering exceptional results for your project.
            </p>
        </div>
        <div className="image-cover">
            {/* <img src={background} alt="background" /> */}
        </div>
    </div>
    <div className="footer">
        <a href="" target='blank'><FaFacebookF size={18}/></a>
        <a href="" target='blank'><FaLinkedinIn size={18}/></a>
        <a href="" target='blank'><FaGithub size={18}/></a>
        <a href="" target='blank'><FaInstagram size={18}/></a>
    </div>
  </div>
  </>
  )
}

export default Home