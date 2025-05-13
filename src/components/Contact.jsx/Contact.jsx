import React from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fffj8xr', 
        'template_9n5z9pv', 
        form.current, {
        publicKey: 'cgM6FpVMsWHKDrJ0T',
      })
    e.target.reset()
  };
  return (
    <section className='contact section' id='contact'>
        <h2 className='section__title'>Get in Touch</h2>
        <span className='section__subtitle'>Contact Me</span>
        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx-mail-send bx contact__card-icon"></i>
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">user@gmail.com</span>
                        <a href="mailto:examplemail@gmail.com.com" className='contact__button'>Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>
                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">999-888-777</span>
                        <a href="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more information!" className='contact__button'>Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                    <div className="contact__card">
                        <i className="bx bxl-messenger contact__card-icon"></i>
                        <h3 className="contact__card-title">Messenger</h3>
                        <span className="contact__card-data">user.fb123</span>
                        <a href="https://m.me/crypticalcoder" className='contact__button'>Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className='contact__title'>Write me your projects</h3>

                <form ref={form} onSubmit={sendEmail} className='contact__form'>
                    <div className="contact__form-div">
                        <label className='contact__form-tag'>Name</label>
                        <input 
                        type="text"
                        name='name' 
                        className='contact__form-input'
                        placeholder='Insert your name'
                        />
                    </div>
                    <div className="contact__form-div">
                        <label className='contact__form-tag'>Your email</label>
                        <input 
                        type="email"
                        name='email'
                        className='contact__form-input'
                        placeholder='Insert your email'
                        />
                    </div>
                    <div className="contact__form-div">
                        <label className='contact__form-tag'>Contact No</label>
                        <input 
                        type="text"
                        name='contact' 
                        className='contact__form-input'
                        placeholder='Insert your phone'
                        />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className='contact__form-tag'>Projects</label>
                        <textarea 
                        name="project" 
                        cols="30" 
                        rows="10"
                        className='contact__form-input'
                        placeholder='Write your project'
                        ></textarea>
                    </div>
                    <button type='submit' className='button home_button button--flex'>
                        Say a Message <svg style={{width: "25px",
                                                height: "25px"
                        }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="message"><path fill="var(--container-color)" d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"></path></svg>
                  </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact;