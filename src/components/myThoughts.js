import React  from 'react';
import data from '../data.json';
import Grid from '@mui/material/Grid';

const experienceData = data.experience;
console.log(experienceData);


function MyThoughts() {
    return (
        <>
        <h3 style={{marginBottom: '1em', color: 'white'}} className="timeline-item"><i className="fa-regular fa-lightbulb timeline-item" style={{marginRight:"10px"}}></i>Thoughts</h3>
        </>
    )
}

export default MyThoughts;