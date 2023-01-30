import React from 'react'
import "./styles/main.css"
import "./styles/skill.css"
import { faPython, faJava, faSquareJs, faReact, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useFloatIn from './components/animate-float'

export default function Skill() {
  const ref = useFloatIn("float-in");
  return (

    <div ref={ref} className='float-in-target'>
      
      
      <div className='skill-container'>
        <h3>Skills</h3>
        <div className='skill-detail'>
            
            <article className='each-skill'>
            <FontAwesomeIcon icon={faPython} className='icons'/>
                <div><h4>Python</h4></div>
            </article>

            <article className='each-skill'>
            <FontAwesomeIcon icon={faJava} className='icons'/>
                <div><h4>Java</h4></div>
            </article>

            <article className='each-skill'>
            <FontAwesomeIcon icon={faSquareJs} className='icons'/>
                <div><h4>JavaScript</h4></div>
            </article>

            <article className='each-skill'>
            <FontAwesomeIcon icon={faReact} className='icons'/>
                <div><h4>React</h4></div>
            </article>

            <article className='each-skill'>
            <FontAwesomeIcon icon={faHtml5} className='icons'/>
                <div><h4>HTML</h4></div>
            </article>

            <article className='each-skill'>
            <FontAwesomeIcon icon={faCss3} className='icons'/>
                <div><h4>CSS</h4></div>
            </article>

        </div>

      </div>
    </div>
  )
}
