import Grid from '@mui/material/Grid';
import React from 'react';
import data from '../data.json';
import amos from '../img/amosHeadshot.jpg';
import Typewriter from 'typewriter-effect';
import MySocial from './social.js';

const personalData = data.personal[0];

function MyPersonal() {
    return(
    <>
    <Grid container item spacing={2}  sx={{alignItems: 'center'}} direction='row' id="personal" className="sidecat" >
        <Grid item xs={4} sm={3} md={12} lg={12} xl={6} >
            <img src={amos} style={{maxWidth: '100%', borderRadius: '100%'}} alt="Amos Cohen"/>
        </Grid>
        <Grid container direction='column' item xs={8} sm={9} md={12} xl={6} id="intro">
            <Grid item xs={12}><h1 style={{fontSize:'1.5em'}}>{personalData.name}</h1></Grid>
            <Grid item id="title" xs={12}>
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
            <Grid container item xs={12}>
                <MySocial/>
            </Grid>
            {/* <Grid item id="title"><h2>{personalData.title}</h2></Grid> */}
        </Grid>
        
        <Grid item xs={12} sm={8} md={12}><p style={{fontSize: '0.9rem'}}>{personalData.profile}</p></Grid>

    </Grid>
    </>
    )
}

export default MyPersonal;