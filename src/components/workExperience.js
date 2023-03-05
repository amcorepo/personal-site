import React  from 'react';
import data from '../data.json';
import Grid from '@mui/material/Grid';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

const experienceData = data.experience;


function Experience({company, position, start_date, end_date, image, responsibilities}) {
    return (

  <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.07, textAlign: 'left', paddingLeft:0
          }, paddingLeft:0
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
           {`${end_date} - ${start_date}`}
          </TimelineOppositeContent>
          <TimelineSeparator>     
              <img src={image} alt="" width="50px" style={{borderRadius: '100%'}}/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h4>{company}</h4>
            <h5>{position}</h5>
            <ul>
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
          </TimelineContent>
        </TimelineItem>
  </Timeline>

      
    );
  }

function WorkExperience() {
    return (
        <>
        <h3 style={{marginBottom: '1em'}}>Work Experience</h3>
        <Grid container item xs={12} md={10} direction="column">
        {experienceData.map((experience, index) => (
        <Grid item xs={12} sm={6} key={index} className="experience">
            <Experience  company={experience.company} position={experience.position} start_date={experience.start_date} end_date={experience.end_date} image={experience.image} responsibilities={experience.responsibilities} />
        </Grid>
        ))}
        </Grid>
        </>
    )
}

export default WorkExperience;