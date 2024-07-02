import React from 'react'
import './styles/project_page.css'
import ContactFooter from "./ContactFooter";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import frontpage from './asset/Front-page.svg'

export default function Project_page() {
  let activeIndex = 0;

  const projects = document.getElementsByClassName("each-project");

  const handleRight = () => {
    //Increment active index

    const nextIndex = activeIndex + 1 <= projects.length - 1 ? activeIndex + 1 : 0;

    const currentProject = document.querySelector(`[data-index="${activeIndex}"]`),
          nextproject = document.querySelector(`[data-index="${nextIndex}"]`);

    //Active project become after

    currentProject.dataset.status = "after";

    //Next project become active

    nextproject.dataset.status = "become-active-from-before";

    setTimeout(() => {
      nextproject.dataset.status = "active";
      activeIndex = nextIndex;
    });
  }

  const handleLeft = () => {
    //Decrement active index

    const nextIndex = activeIndex - 1 >= 0?  activeIndex - 1 : projects.length -1;

    const currentProject = document.querySelector(`[data-index="${activeIndex}"]`),
          nextproject = document.querySelector(`[data-index="${nextIndex}"]`);

    //Active project become before

    currentProject.dataset.status = "before";

    //previous project become active

    nextproject.dataset.status = "become-active-from-after";

    setTimeout(() => {
      nextproject.dataset.status = "active";
      activeIndex = nextIndex;
    });
  }

  return (
    <div>
      <h className='project-page-main-title'>Projects</h>
      <div className='project-page'>
        
        <div className='project-page-container'>
          <div className='each-project' data-index='0' data-status='active'>
            <div className='project-each-container'>
              <h className='project-page-title'>Personal Portfolio Website (Front-End)</h>
              <a href='https://yikping.com/' target="_blank" rel="noreferrer" >
                  <img className='project-page-image' src={frontpage} alt='front-page'/>  
              </a>
              
            </div>
            <div className='project-page-detail'>
              <h className='project-detail-title'>Personal Portfolio Website (Front-End)</h>
              <p className=''>{'My personal portfolio webpage custom built with React, responsive and serves as a comprehensive introduction to my work and capabilities.'}</p>
              {'Technologies used:'}
              <div className='tech-used'><FontAwesomeIcon icon={faReact} />  {'React'}</div>
              <a href="https://yikping.com/" target="_blank" rel="noreferrer" >
                  <button className='live-demo-button'>Live Demo</button>
              </a>
            </div>
          </div>
          <div className='each-project' data-index='1' data-status='unknown'>
            <div className='project-each-container '>
              <h className='project-page-coming-soon'>Coming Soon</h>
            </div>
          </div>
        </div>
        <div className='swiper'>
              <button id='left-button' onClick={handleLeft}>
                <FontAwesomeIcon icon = {faArrowLeft}/>
              </button>
              <button id='right-button' onClick={handleRight}>
                <FontAwesomeIcon icon = {faArrowRight}/>
              </button>
            </div>
      </div>


          <section id={'contact'} style={{marginTop: '200px'}}>
            <ContactFooter/>
          </section>
    </div>
  )
}
