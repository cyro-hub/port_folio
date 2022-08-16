import React from 'react'
import myPhoto from '../image/owner.png'

function About() {
  return (<div className='about max_width' id='about'>
      <img src={myPhoto} alt="owner" />
      <p>
          I'm <span>BONGBUIN CYRIL MENTAN</span> a Web developer and the founder of Cyliosco. I'm very very positive in thinking and in actions.
      </p>
  </div>)
}

export default About