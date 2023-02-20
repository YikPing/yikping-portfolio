import React from 'react'
import { ProgressBar, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from "./AboutMe";
import Skill from "./Skill";
import ContactFooter from "./ContactFooter";
import Project from "./Project";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import "./styles/icons.css";
import "./styles/main.css"
import { useNavigate } from "react-router-dom";

const fontstyle = 'Sofia Sans'
const progress_percentage = 35

export default function MainPage() {
  const navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/project_page`; 
    navigate(path);
  }
  return (
    <>  
        
        
    <div  className="main-page" style = {{height: "100px", 
                    paddingTop: '100px',
                    paddingLeft: '10px',
                    paddingRight: '10px',}} >
        
        <div >
          <div style={{
                width:'100%',
                fontFamily: 'Mogra',
                textAlign: 'center',
                justifyContent: 'center',
                color: '#AED6F1'}}>
              <p className='responsive-main-name'>{'Wong Yik Ping'}</p>
          </div>
          
          <div style={{
                  height:'120px',
                  fontFamily:fontstyle,
                  fontSize: '2vw',
                  textAlign: 'center',
                  justifyContent: 'center',
                  color: 'white'}}>   
          <p className='responsive-md-text'>{'Bachelor of Computer Science student at Monash University'}</p>
          </div>      

          <div style={{height: '200px'}}>

          <div style={{fontFamily:fontstyle,
                  textAlign: 'center',
                  justifyContent: 'center',
                  color: 'white'}}>  
          <p className='responsive-md-text'>{'University Progress'}</p>
          </div>
          
          <div className='responsive-progress-bar-size' >
          <ProgressBar max={100} now={progress_percentage} animated striped variant="info" label={`1st year completed`} />
          </div>

          <div style={{
                fontFamily: fontstyle,
                  textAlign: 'center',
                  justifyContent: 'center',
                  color: 'white'}}>
          <text className='responsive-sm-text'>{'Graduating in November 2024'}</text>
          </div>
        </div>
        </div>
        <Container>
        <div className='social-icons d-flex justify-content-center'>
              <a href="https://github.com/YikPing" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon ={faGithub} /><i class="fa fa-reply"><span></span></i>
              </a>
              <a href="https://www.linkedin.com/in/wong-yik-ping/" target="_blank" rel="noreferrer" >
                <FontAwesomeIcon icon ={faLinkedin} /><i class="fa fa-reply"><span></span></i>
              </a>
              <a href="mailto:wongyiking2002@gmail.com" target="_blank" rel="noreferrer" >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
        </div>
        </Container>
        </div>
            
        <section id={"aboutme"}>
        <div style={{
          display:'flex',
          justifyContent: 'center',
          marginBottom: '100px'}}><AboutMe /></div>
        
        <Skill/>
        </section>

        <section id={'project'} >
          <Project/>
        </section>
        
        <div className="resume-button-div">
        <button class="btn-57" onClick={routeChange}>More Project</button>
        <a href="https://docs.google.com/document/d/10vh3ObKehpF2hn8bYOfPAGro69CgWbWPmkkoxgMFN8s/edit?usp=sharing" target="_blank" rel="noreferrer" >
            <button style={{marginTop: '200px'}} className='resume-button'>Resume</button>
        </a>
        </div>

        <section id={'contact'} style={{marginTop: '200px'}}>
          <ContactFooter/>
        </section>
        
    
    </>  
  )
}
