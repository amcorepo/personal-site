import Grid from '@mui/material/Grid';
import React from 'react';
import data from '../data.json';
const educationData = data.education[0];
function MyEducation() {
    return(
    <>
    <Grid item><h3>Education</h3></Grid>
    <Grid item><p className='hehe'>{`${educationData.degree} in ${educationData.major} and ${educationData.minor},`}</p></Grid>
    <Grid item><p>{`${educationData.university}, ${educationData.duration}, `}</p></Grid>
    <Grid item><p>{`${educationData.gpa} GPA, ${educationData.awards}. `}</p></Grid>
    </>
    )
}

export default MyEducation;