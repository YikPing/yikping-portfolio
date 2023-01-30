import React from 'react'
import { ProgressBar, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import "./styles/icons.css";
import "./styles/main.css"

const fontstyle = 'Sofia Sans'
const progress_percentage = 35

export default function MainPage() {
  
  return (
    <div  style = {{height: "100px", 
    paddingTop: '100px',
    paddingLeft: '10px',
    paddingRight: '10px',}}>
        
        <div >
          <div 
            
              style={{
                width:'100%',
                fontFamily: 'Mogra',
                  textAlign: 'center',
                  justifyContent: 'center',
                  color: '#AED6F1'
              }}
              >
              <p className='responsive-main-name'>{'Wong Yik Ping'}</p>
          </div>
          
          <div 
              style={{
                  height:'120px',
                  fontFamily:fontstyle,
                  fontSize: '2vw',
                  textAlign: 'center',
                  justifyContent: 'center',
                  color: 'white'
              }}
              >
                
          <p className='responsive-md-text'>{'Bachelor of Computer Science student at Monash University'}</p></div>      

          <div 
              style={{height: '200px'}}>

          <div 
              style={{
                  fontFamily:fontstyle,
                  textAlign: 'center',
                  justifyContent: 'center',
                  color: 'white'
              }}
              >  
          <p className='responsive-md-text'>{'University Progress'}</p></div>
          
          <div className='responsive-progress-bar-size'
            >
          <ProgressBar max={100} now={progress_percentage} animated striped variant="info" label={`1st year completed`} />
          </div>

          <div 
              style={{
                fontFamily: fontstyle,
                  textAlign: 'center',
                  justifyContent: 'center',
                  color: 'white'
              }}
              >
          <text className='responsive-sm-text'>{'Graduating in November 2024'}</text></div>
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
  )
}
