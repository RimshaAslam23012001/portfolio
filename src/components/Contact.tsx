import React from 'react'
import '@/styles/contact.css';
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div className='contact-grid'>
        <div className='contact-space'>
          <h2 className='contact-heading'>Get in touch</h2>
          <p className='contact-text'>
            Drop me a line,give me a call,or send me a message submitting the form
          </p>
          <div className='contact-flex'>
             <MdMarkEmailRead size={30}/>rimsha.ansar@gmail.com
          </div>
          <div className='contact-flex'>
             <FaPhone  size={30}/>0343-0000430
          </div>
        </div>
        <div className='contact-space' data-aos="zoom-in-up">
          <div className='form'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' className='input-field' />
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' className='input-field' />
            <label htmlFor='message'>Message:</label>
            <textarea id='message' className='textarea-field' rows={4} />
          </div>
          <button className='button' data-aos="zoom-out-up">Send</button>
        </div>
      </div>
      
    </div>
  )
}

export default Contact;
