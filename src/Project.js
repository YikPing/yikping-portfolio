import React from 'react'
import useFloatIn from './components/animate-float'
import './styles/project.css'
import './styles/main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import frontpage from './asset/Front-page.svg'
import footer from './asset/footer.svg'


export default function Project() {
  const float = useFloatIn("float-in");
  return (
    <div ref={float}>
      
      <h className='project'>Projects</h>
      <div className='project-container'>
        <div className='project-image'>
        <a href='https://yikping.github.io/yikping/' target="_blank" rel="noreferrer" >
            <img src={footer} alt='footer'/>  
            <img src={frontpage} alt='front-page'/>  
          </a>
        </div>
        <div className='project-detail'>
            <h className='project-title'>Personal Portfolio Website (Front-End)</h>
            <p className=''>{'My personal portfolio webpage cutsom built with React, responsive and serves as a comprehensive introduction to my work and capabilities.'}</p>
            {'Technologies used:'}
            <div className='tech-used'><FontAwesomeIcon icon={faReact} />  {'React'}</div>
            <a href="https://yikping.github.io/yikping/" target="_blank" rel="noreferrer" >
                <button className='live-demo-button'>Live Demo</button>
            </a>

        </div>
      
      </div>
      
    </div>
    
  )
}
