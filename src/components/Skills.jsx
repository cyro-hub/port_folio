import React from 'react'
import reactIcon from '../image/icons/icons8-react-400.png'
import cssIcon from '../image/icons/icons8-css3-480.png'
import htmlIcon  from '../image/icons/icons8-html-5-480.png'
import jsIcon from '../image/icons/icons8-javascript-480.png'
import phpIcon from '../image/icons/icons8-php-logo-480.png'

function Skills() {
  return (<div className='skills'>
    <h3>Skill</h3>
    <div className="skill_list">
        <div className="skill_icon">
            <img src={htmlIcon} alt="html_icon" />
            <p>HTML 5</p>
        </div>
        <div className="skill_icon">
            <img src={cssIcon} alt="css_icon" />
            <p>CSS</p>
        </div>
        <div className="skill_icon">
            <img className='js' src={jsIcon} alt="js_icon" />
            <p>Javascript</p>
        </div>
        <div className="skill_icon">
            <img src={reactIcon} alt="react_icon" />
            <p>React js</p>
        </div>
        <div className="skill_icon">
            <img src={phpIcon} alt="php_icon" />
            <p>PHP</p>
        </div>
    </div>
  </div>)
}

export default Skills