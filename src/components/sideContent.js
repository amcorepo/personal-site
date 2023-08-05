import Grid from '@mui/material/Grid';
import React from 'react';
import MySkills from './skills.js';
import MyEducation from './education.js';
import MyPersonal from './personal.js';
import MyContact from './contact.js';

function SideContent(props) { 
  return (
    
    <Grid container spacing={4}>
        <Grid item xs={12} >
            <MyPersonal  personal={props.personal} />
        </Grid>
        <Grid spacing={1} xs={12} sm={4} md={12} item id="education" className="sidecat">
            <MyEducation education={props.education}/>
        </Grid>
        <Grid item xs={12} sm={4} md={12} id="skills" className="sidecat">
            <MySkills skills={props.skills}/>
        </Grid>
        <Grid item xs={12} sm={4} md={12} id="contact" className="sidecat">
          <MyContact contact={props.personal}/>
        </Grid>
    </Grid>
  )
}

export default SideContent;