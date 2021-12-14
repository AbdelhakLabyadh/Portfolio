import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';

import './Contact.css';

const Contact = () => {
  const toastifySuccess = () => {
    toast('Email sent!! Thanks for contacting me. I will respond ASAP.', {
      position: 'bottom-right',
      color: 'white',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
    });
  };

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        'abdelhak',
        'template_abdelhak',
        e.target,
        'user_OJ9FJjUBapzVzFJM5KNB1'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    toastifySuccess();
    e.target.reset();
  };

  return (
    <div>
      <form id='Contact' onSubmit={sendEmail}>
        <h1 className='section-header'>Contact Me</h1>
        <div className='contact-wrapper'>
          {/* Left contact page */}
          <div id='contact-form' className='form-horizontal'>
            <div className='form-group'>
              <div className='col-sm-12'>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  placeholder='NAME'
                  name='name'
                  required
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-12'>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  placeholder='EMAIL'
                  name='email'
                  required
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-12'>
                <input
                  type='text'
                  className='form-control'
                  id='subject'
                  placeholder='SUBJECT'
                  name='subject'
                  required
                />
              </div>
            </div>
            <textarea
              className='form-control'
              rows={10}
              placeholder='MESSAGE'
              name='message'
              required
            />
            <button type='submit' className='about btn pointer'>
              <div className='send'>
                SEND
                <SendIcon />
              </div>
            </button>
            <ToastContainer />
          </div>
          {/* Right contact page */}
          <div className='direct-contact-container'>
            <ul className='contact-list'>
              <li className='list-item'>
                <i className='fa fa-map-marker fa-2x'>
                  <span className='contact-text place'>Gabes, Tunisia</span>
                </i>
              </li>
              <li className='list-item'>
                <i className='fa fa-phone fa-2x'>
                  <span className='contact-text phone'>
                    <a href='tel:0021627328288' title='Give me a call'>
                      +216 27 32 82 88
                    </a>
                  </span>
                </i>
              </li>
              <li className='list-item'>
                <i className='fa fa-envelope fa-2x'>
                  <span className='contact-text gmail'>
                    <a
                      href='mailto:abdelhak.labyadh@outlook.com'
                      title='Send me an email'>
                      abdelhak.labyadh@outlook.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>
            <hr />
            <div className='social-media-list'>
              <a href='https://github.com/AbdelhakLabyadh' target='_blank'>
                <GitHubIcon />
              </a>
              <a href='https://codepen.io/abdelhaklabyadh' target='_blank'>
                <i className='fa fa-codepen' aria-hidden='true' />
              </a>
              <a
                href='https://www.linkedin.com/in/abdelhak-labyadh-781547134'
                target='_blank'>
                <LinkedInIcon />
              </a>
              <a
                href='https://www.facebook.com/abdelhak.labyadh'
                target='_blank'>
                <FacebookIcon />
              </a>
            </div>
            <hr />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
