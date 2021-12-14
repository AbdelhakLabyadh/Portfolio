import React from 'react';
import AboutImg from '../../img/bg__2.jpg';
import './About.css';

const About = () => {
  return (
    <div className='about component__space' id='About'>
      <div className='container'>
        <div className='row'>
          <div className='col__2'>
            <img src={AboutImg} className='about__img' alt='' />
          </div>
          <div className='col__2 contact__details'>
            <h1 className='about__heading'>About Me</h1>
            <div className='about__meta'>
              <p className='about__text p__color'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled.
              </p>
              <p className='about__text p__color'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled.
              </p>
              <p className='about__text p__color'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              <div className='about__button d__flex align__items__center'>
                <a href='Abdelhak.pdf' download='Abdelhak Labyadh.pdf'>
                  <button className='about btn pointer'>Download CV</button>
                </a>
                <a href='#Contact'>
                  <button className='about btn pointer'>Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
