import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import SideContent from './components/sideContent.js'
import MainContent from './components/mainContent.js'
import MyThoughts from './components/myThoughts.js'
import thoughts from './thoughts.json'
import data from './data.json'

const experienceData = data.experience;
const thoughtsData = thoughts.thoughts;
const personalData = data.personal[0];
const educationData = data.education[0];
const skillsData = data.skills;

function App() {
  return (
    <div className="App">
        <Grid container sx={{height:'100vh'}}>
          <Grid container item xs={12} md={3} direction='column' sx={{backgroundColor: '#4040cd', color:'white', padding: '2rem', position: {md: 'sticky'}, left: {md: '0'}, height: {md:'100vh'}, boxShadow: {md:"1px 0px 2px 1px #ccc"}}}>
            <SideContent personal={personalData} education={educationData} skills={skillsData}/>
          </Grid>
          
          <Grid container item xs={12} md={6} sx={{padding: '2rem', overflowY: {md:'auto'}, height:{md:'100vh'}  }}  >
          <MainContent experience={experienceData} />
          </Grid>
          <Grid container item xs={12} md={3} sx={{backgroundColor: '#40CD87', color:'white', padding: '2rem 1rem', overflowY: {md:'auto'}, height:{md:'100vh'}, boxShadow: {md:"1px 0px 2px 1px #ccc"}}}>
            <Grid item>
            <MyThoughts thoughts={thoughtsData} />
            </Grid>
          </Grid>
        </Grid>      
    </div>
  );
}
export default App;
