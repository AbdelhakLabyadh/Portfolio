import React from 'react';
import FrontEnd from './img/front-end.png';
import Github from './img/github.png';
import Database from './img/database.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Labyadh Abdelhak',
  address: 'Calçada da Picheleira 66  3 FTE - 1900-373 LISBON',
  phone: '+315 937 984 716',
  job: 'Frontend developer',
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
      description: [
        'ReactJS',
        'React Native',
        'TypeScript',
        'JavaScript',
        'ES6',
        'Tailwind CSS',
       
      ],
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
