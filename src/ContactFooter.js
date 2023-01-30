import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import './styles/main.css'
import './styles/contact.css'
import './styles/icons.css'

export default function ContactFooter() {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4wiaphl', 'template_ixkjyjk', form.current, 'y0Yxal77uCuFuWD4p')
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully!");
        }, (error) => {
            console.log(error.text);
            alert("Something went wrong, message not sent ;-;")
        });
        e.target.reset()
    };
    
  return (
    <>
    <div className='contact-container'>
        <div className='contact-text'>
        <h>Contact Me</h>
        </div>
        <div className='container-field'>
            <form ref={form} onSubmit={sendEmail} className='container-field'>
                <label>Name</label>
                <input type="text" name="user_name" className='email-name-input'/>
                <label>Email</label>
                <input type="email" name="user_email" className='email-name-input'/>
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" className='send-button'/>
            </form>
        </div>
    </div>
        <div className='footer'>
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
            
            <h className='footer-text'>© 2023 Yik Ping</h>
        </div>
    </>
  )
}
