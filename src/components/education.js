import Grid from '@mui/material/Grid';
import React from 'react';

function MyEducation(props) {
    return(
    <>
    <Grid item>
        <h3><i className="fa-solid fa-user-graduate" style={{marginRight:"10px"}}></i>Education</h3></Grid>
    <Grid item><p className='hehe'>{`${props.education.degree} in ${props.education.major} and ${props.education.minor},`}</p></Grid>
    <Grid item><p>{`${props.education.university}, ${props.education.duration}, `}</p></Grid>
    <Grid item><p>{`${props.education.gpa} GPA, ${props.education.awards}. `}</p></Grid>
    </>
    )
}

export default MyEducation;