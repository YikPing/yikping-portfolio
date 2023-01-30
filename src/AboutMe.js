import React from 'react'
import useFloatIn from './components/animate-float'
import img from './asset/code-back.png'
import "./styles/main.css"
import "./styles/aboutme.css"
const fontstyle = 'Sofia Sans'


export default function AboutMe() {
  const float = useFloatIn("float-in");
  

  return (
    <div ref={float} style={{
        backgroundImage: `url(${img})`,
        fontstyle: fontstyle,
        }} className='background-container float-in-target'>
        <h1 className='responsive-large-text ' style={{color: '#3fb0d9'}}>{'About Me'}</h1>
        <p className='responsive-about-text '>{"Hello, my name is Yik Ping and am currently pursuing a Bachelor of Computer Science at Monash University."}</p>
        <p className='responsive-about-text '>{"Throughout my studies or even before, I have developed a deep passion for coding and problem solving. I am eager to learn new technologies and am constantly seeking new opportunities to apply my skills to real-world projects."}</p>
        <p className='responsive-about-text '>{" I am excited to see where my career in computer science will take me and determined to make the most of every opportunity to advance my knowledge and skills."}</p>
    </div>
  )
}
