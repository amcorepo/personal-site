
import Grid from '@mui/material/Grid';
import React  from 'react';
import data from '../data.json';

const skillData = data.skills;

function Skill({ name, level, iconClass }) {
    return (
      <Grid container spacing={0.5}>
             <Grid item>
             <i className={iconClass} style={{marginRight:'2px'}}></i>
            </Grid>
            <Grid item>
            <p>{name}</p>
            </Grid>
        </Grid>
      
    );
  }
function MySkills() {
    return (
        <>  
        <Grid container id="skills" className="sidecat">
            <Grid item xs={12}>
            <h3 style={{marginBottom: '10px'}}><i className="fa-solid fa-certificate" style={{marginRight:"10px"}}></i>Skills</h3>
            </Grid>
            <Grid container spacing={1.5} item>
                {skillData.map((skill, index) => (
                    <Grid item key={index} >
                        <Skill name={skill.name} level={skill.level} iconClass={skill.icon} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
        </>
    )
}
export default MySkills;