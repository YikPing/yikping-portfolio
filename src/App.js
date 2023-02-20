import React from "react";
import MainPage from "./MainPage";
import { useEffect } from "react";
import WebFont from "webfontloader";
import Particlesbackground from './components/particlesbackground'
import {Helmet} from "react-helmet";
import "./styles/main.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project_page from "./Project_page";
import Navbar from "./components/navbar";
import ScrollToTop from "./scrollToTop";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Sofia Sans','Montserrat Subrayada']
      }
    });
   }, []);
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Yik Ping</title>
          <link rel="canonical" href="https://yikping.github.io/yikping/" />
        </Helmet>
        <Particlesbackground/>
      <Router>
        <div>
        <React.Fragment>
                <Navbar/>
        </React.Fragment>
        <ScrollToTop/>
        <Routes>
          
          <Route exact path="/yikping" element={<MainPage />} />
          <Route path="/project_page" element={<Project_page />} />
        </Routes>
        </div>
      </Router>
      
    </div>
  )
}

export default App;
