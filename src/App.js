import React from "react";
import MainPage from "./MainPage";
import { useEffect } from "react";
import WebFont from "webfontloader";
import Navbar from "./components/navbar";
import AboutMe from "./AboutMe";
import Skill from "./Skill";
import ContactFooter from "./ContactFooter";
import Project from "./Project";
import "./styles/main.css"
import Particlesbackground from './components/particlesbackground'

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Sofia Sans','Montserrat Subrayada']
      }
    });
   }, []);

  return (
    <>
      <section id={'mainpage'}>
      <React.Fragment>
              <Navbar/>
      </React.Fragment>
      <Particlesbackground/>

      
      <div className="main-page"><MainPage/></div>
      </section>

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

export default App;
