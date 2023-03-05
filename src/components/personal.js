import Grid from '@mui/material/Grid';
import React from 'react';
import data from '../data.json';
import amos from '../img/amosHeadshot.jpg';
import Typewriter from 'typewriter-effect';


const personalData = data.personal[0];

function MyPersonal() {
    return(
    <>
    <Grid container item spacing={2}  sx={{alignItems: 'center'}} direction='row' id="personal" className="sidecat" >
        <Grid item xs={12} sm={3} md={12} lg={12} xl={5} >
            <img src={amos} style={{maxWidth: '150px', borderRadius: '100%'}} alt="Amos Cohen"/>
        </Grid>
        <Grid container direction='column' item xs={12} sm={9} md={12} xl={7} id="intro">
            <Grid item><h1>{personalData.name}</h1></Grid>
            <Grid item id="title">
            <Typewriter
                options={{
                    strings: ['Co-Founder','Frontend', 'UX', 'Problem Solver', 'Creator', 'Product Manager'],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'title',
                    cursorClassName: 'title'
                }}
                />

            </Grid>
            {/* <Grid item id="title"><h2>{personalData.title}</h2></Grid> */}
        </Grid>
        <Grid item><p>{personalData.profile}</p></Grid>

    </Grid>
    </>
    )
}

export default MyPersonal;