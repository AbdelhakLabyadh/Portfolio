import React from 'react';
import AboutImg from '../../img/bg__2.jpg';
import './About.css';

const About = () => {
  return (
    <div className='about component__space' id='About'>
      <div className='container'>
        <div className='row'>
          <div className='col__2'>
            <img src={AboutImg} className='about__img' alt='Abdelhak_Photo' />
          </div>
          <div className='col__2 contact__details'>
            <h1 className='about__heading'>About Me</h1>
            <div className='about__meta'>
              <p className='about__text p__color'>
                I am a Junior Front-End developer. <br />I have an experience as 
                a front-end deloper and also have made a training in Full
                Stack JS Web Developer using ReactJS Library.
              </p>
              <p className='about__text p__color'>
                Young, passionate and highly motivated for new challenges that
                can be benefic for me and for the team i will be working with. <br />I
                am responsible and open to new technologies and challenges. <br /> I have
                a team spirit.
              </p>
              <p className='about__text p__color'>
                I am sure that the experience I have will be very
                useful. <br /> They made me learn how to make decisions in the
                good time.
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
