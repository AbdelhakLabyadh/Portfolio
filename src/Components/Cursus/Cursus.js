import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import './Cursus.css';

export default function CustomizedTimeline() {
  return (
    <div className='cursus' id='Cursus'>
      <div className='heading'>
        <h1 className='cursus__heading'>My Cursus</h1>
      </div>
      <Timeline position='alternate'>
        <TimelineItem>
          <TimelineOppositeContent className='year'>
            2012 -- 2013
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography className='specialite' variant='h6' component='span'>
              High School Diploma
            </Typography>
            <Typography className='school'>
              Argoub Secondary School, Gabes
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            className='year'
            sx={{ m: 'auto 0' }}
            variant='body2'>
            2014 -- 2017
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='primary'>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography className='specialite' variant='h6' component='span'>
            Bachelor’s degree in Computer Science
            </Typography>
            <Typography className='school'>
              Higher Institute of Computer Science and Mathematics <br /> of
              Monastir - Tunisia
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            className='year'
            sx={{ m: 'auto 0' }}
            align='right'
            variant='body2'>
            2017 -- 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='primary' variant='outlined'>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>

          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography className='specialite' variant='h6' component='span'>
            Master’s degree in software engineering
            </Typography>
            <Typography className='school'>
              Higher Institute of Computer Science of Ariana, Tunisia
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            className='year'
            sx={{ m: 'auto 0' }}
            variant='body2'>
            2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color='secondary'>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography className='specialite' variant='h6' component='span'>
              Full-Stack JavaScript Bootcamp Training
            </Typography>
            <Typography className='school'>
              GOMYCODE Center Gabes - Tunisia
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
