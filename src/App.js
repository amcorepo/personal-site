import React, { useState } from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import SideContent from './components/sideContent.js'
import MainContent from './components/mainContent.js'
import MyThoughts from './components/myThoughts.js'
import MyThought from './components/thought.js'

function App() {
  const [currentView, setCurrentView] = useState('default');

  const handleThoughtClick = () => {
    setCurrentView('blogView');
  };

  const handleBackButtonClick = () => {
    setCurrentView('default');
  }

  return (
    <div className="App">
      {currentView === 'default' ? ( 
        <Grid container sx={{height:'100vh'}}>
          <Grid container item xs={12} md={3} direction='column' sx={{backgroundColor: '#4040cd', color:'white', padding: '2rem', position: {md: 'sticky'}, left: {md: '0'}, height: {md:'100vh'}, boxShadow: {md:"1px 0px 2px 1px #ccc"}}}>
            <SideContent/>
          </Grid>
          
          <Grid container item xs={12} md={6} sx={{padding: '2rem', overflowY: {md:'auto'}, height:{md:'100vh'}  }}  >
          <MainContent />
          </Grid>
          <Grid container item xs={12} md={3} sx={{backgroundColor: '#40CD87', color:'white', padding: '2rem 1rem', overflowY: {md:'auto'}, height:{md:'100vh'}, boxShadow: {md:"1px 0px 2px 1px #ccc"}}}>
            <Grid item>
            <MyThoughts onThoughtClick={handleThoughtClick}/>
            </Grid>
          </Grid>
        </Grid>
    ) : (
    <>
    <Grid container>  
      <Grid item xs={12} md={9}>
        <h1>HEYYYY</h1>
        <MyThought onBackClick={handleBackButtonClick}/>
        {/* THOUGHT COMP */}
      </Grid>    
      <Grid container item xs={12} md={3} sx={{backgroundColor: '#40CD87', color:'white', padding: '2rem 1rem', overflowY: {md:'auto'}, height:{md:'100vh'}, boxShadow: {md:"1px 0px 2px 1px #ccc"}}}>
        <Grid item>
          <MyThoughts onThoughtClick={handleThoughtClick}/>
        </Grid>
      </Grid>
    </Grid>
      </>
    )}
        
    </div>
  );
}
export default App;
