import React from 'react'
import './contacts.css'
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    e.target.reset()
  };
  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>danielchoma95@yahoo.it</h5>
            <a href="mailto:danielchoma95@yahoo.it" target='_blank'>Send A Message</a>
          </article>

          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+39 3518551596</h5>
            <a href="hhtps://wa.me/393518551596" target='_blank'>Send A Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts