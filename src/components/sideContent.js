import Grid from '@mui/material/Grid';
import React from 'react';
import MySkills from './skills.js';
import MyEducation from './education.js';
import MyPersonal from './personal.js';
import MyContact from './contact.js';

function SideContent(props) { 
  return (
    
    <Grid container direction="column" spacing={4}>
        <Grid item>
            <MyPersonal personal={props.personal} />
        </Grid>
        <Grid container spacing={1} item direction="column" id="education" className="sidecat">
            <MyEducation education={props.education}/>
        </Grid>
        <Grid container item>
            <MySkills skills={props.skills}/>
        </Grid>
        <Grid container item>
          <MyContact contact={props.personal}/>
        </Grid>
    </Grid>
  )
}

export default SideContent;