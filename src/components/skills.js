
import Grid from '@mui/material/Grid';
import React  from 'react';
import data from '../data.json';
import { LinearProgress } from '@mui/material';

const skillData = data.skills;

function Skill({ name, level, iconClass }) {
    return (
      <Grid container alignItems="center" sx={{marginBottom:'10px'}}>
             <Grid item xs={1}>
             <i className={iconClass}></i>
            </Grid>
            <Grid item xs={3}>
            {name}
            </Grid>
            <Grid item xs={8}>
            <LinearProgress variant="determinate" value={level} sx={{backgroundColor: 'white', height: '10px', borderRadius: '10px', '& .MuiLinearProgress-bar': { backgroundColor: '#CDCD40' }}}/>
            </Grid>
        </Grid>
      
    );
  }
function MySkills() {
    return (
        <>
        
        <Grid container id="skills" className="sidecat" >
            <Grid item xs={12}>
                <h3 style={{marginBottom: '10px'}}>Skills</h3>
            </Grid>
        {skillData.map((skill, index) => (
        <Grid item xs={12} sm={7} md={12} key={index}>
            <Skill name={skill.name} level={skill.level} iconClass={skill.icon} />
        </Grid>
        ))}
        </Grid>
        </>
    )
}

export default MySkills;