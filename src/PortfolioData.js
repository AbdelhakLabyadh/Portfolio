import React from 'react';
import BackEnd from './img/back-end.png';
import FrontEnd from './img/front-end.png';
import Github from './img/github.png';
import Database from './img/database.png';

export default {
  name: 'Labyadh Abdelhak',
  address: 'Ayoun Zerkine 2, Mareth 6015, Gabes',
  phone: '+216 27 32 82 88',
  job: 'Full Stack JS developer',
  email: 'abdelhak.labyadh@outlook.com',
  skype: 'labyadhabdelhak94',

  skills: [
    {
      image: (
        <img
          src={FrontEnd}
          alt='Front End'
          style={{ width: '50px', height: '50px' }}
        />
      ),
      title: 'FRONT-END',
      description: ['ReactJS', 'JavaScript', 'ES6', 'Bootstrap', 'Material UI'],
    },
    {
      image: (
        <img
          src={BackEnd}
          alt='Back End'
          style={{ width: '50px', height: '50px' }}
        />
      ),
      title: 'BACK-END',
      description: ['NodeJS', 'Express'],
    },
    {
      image: (
        <img
          src={Database}
          alt='Databases'
          style={{ width: '50px', height: '50px' }}
        />
      ),
      title: 'DATABASES',
      description: ['MongoDB', 'MySQL'],
    },
    {
      image: (
        <img
          src={Github}
          alt='Source Control'
          style={{ width: '50px', height: '50px' }}
        />
      ),
      title: 'SOURCE CONTROL',
      description: ['Git', 'Github'],
    },
  ],
};
