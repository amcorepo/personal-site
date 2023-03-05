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
            <TimelineOppositeContent color="textSecondary" fontSize={{xs: "0.7em", md: "1em"}} align="right" >
            {end_date ? `${end_date} - ${start_date}` : `${start_date}`}
            </TimelineOppositeContent>
              <TimelineSeparator>     
                  <img src={image} alt="" width="50px" style={{borderRadius: '100%'}}/>
                <TimelineConnector
                sx={{marginTop: "10px", backgroundColor: "rgba(0,0,0, 0.4)"}}
                />
              </TimelineSeparator>
              <TimelineContent>
                <h4>{company}</h4>
                <h5>{position}</h5>
                <ul style={{marginTop: "10px"}}>
                {responsibilities.map((responsibility, index) => (
                  <Grid item xs={12} sx={{fontSize: {xs: '0.75rem', xl: '1rem'}}}>
                  <li key={index}>{responsibility}</li>
                  </Grid>
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
      
        <h3 style={{marginBottom: '1em'}}><i class="fa-solid fa-briefcase" style={{marginRight:"10px"}}></i>Work Experience</h3>
      
        {experienceData.map((experience, index) => (
            <Experience key={index} company={experience.company} position={experience.position} start_date={experience.start_date} end_date={experience.end_date} image={experience.image} responsibilities={experience.responsibilities} />
 
        ))}
       
        </>
    )
}

export default WorkExperience;