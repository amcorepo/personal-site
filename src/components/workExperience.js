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



function Experience({company, position, start_date, end_date, image, location, responsibilities}) {
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
                <h5 style={{fontStyle: 'italic'}}>{position}</h5>
                <p style={{fontSize:'0.7em'}}>{location}</p>
                <ul style={{marginTop: "10px"}}>
                {responsibilities.map((responsibility, index) => (
                  <Grid item key={index} sx={{fontSize: {xs: '0.75rem', xl: '1rem'}}}>
                  <li>{responsibility}</li>
                  </Grid>
                ))}
              </ul>
              </TimelineContent>
        </TimelineItem>
       
  </Timeline>

      
    );
  }

function WorkExperience(props) {
    return (
        <>
      
        <h3 style={{marginBottom: '1em'}} className="timeline-item"><i className="fa-solid fa-briefcase timeline-item" style={{marginRight:"10px"}}></i>Work Experience</h3>
        {props.experience.map((experience, index) => (
          <Grid item key={index} className="timeline-item">
            <Experience company={experience.company} position={experience.position} start_date={experience.start_date} end_date={experience.end_date} image={experience.image} responsibilities={experience.responsibilities} location={experience.location} />
          </Grid>
 
        ))}
        </>
    )
}

export default WorkExperience;