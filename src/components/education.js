import Grid from '@mui/material/Grid';
import React from 'react';
import data from '../data.json';
const educationData = data.education[0];
function MyEducation() {
    return(
    <>
    <Grid item>
        <h3><i class="fa-solid fa-user-graduate" style={{marginRight:"10px"}}></i>Education</h3></Grid>
    <Grid item sx={{fontSize: {xs: '0.75rem', xl: '1rem'}}}><p className='hehe'>{`${educationData.degree} in ${educationData.major} and ${educationData.minor},`}</p></Grid>
    <Grid item sx={{fontSize: {xs: '0.75rem', xl: '1rem'}}}><p>{`${educationData.university}, ${educationData.duration}, `}</p></Grid>
    <Grid item sx={{fontSize: {xs: '0.75rem', xl: '1rem'}}}><p>{`${educationData.gpa} GPA, ${educationData.awards}. `}</p></Grid>
    </>
    )
}

export default MyEducation;