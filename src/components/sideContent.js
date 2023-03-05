import Grid from '@mui/material/Grid';
import React from 'react';
import MySkills from './skills.js';
import MyEducation from './education.js';
import MyPersonal from './personal.js';

function SideContent() { 
  return (
    
    <Grid container direction="column" spacing={4}>
        <Grid item>
            <MyPersonal />
        </Grid>
        <Grid container spacing={1} item direction="column" id="education" className="sidecat">
            <MyEducation/>
        </Grid>
        <Grid container item direction="column" spacing={0.5}>
            <MySkills/>
        </Grid>
    </Grid>
  )
}

export default SideContent;