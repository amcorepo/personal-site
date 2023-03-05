import * as React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import SideContent from './components/sideContent.js'
import MainContent from './components/mainContent.js'

function App() {
  return (
    <div className="App">
        <Grid container sx={{height:'100vh'}}>
          <Grid container item xs={12} md={3} direction='column' sx={{backgroundColor: '#4040cd', color:'white', padding: '2rem', position: {md: 'sticky'}, left: {md: '0'}, height: {md:'100vh'}}}>
            <SideContent/>
          </Grid>
          <Grid container item direction='row' xs={12} md={9} sx={{padding: '2rem', overflowY: {md:'auto'}, height:{md:'100vh'}  }}  >
            <Grid item xs={12}>
           <MainContent />
            </Grid>
          </Grid>
        </Grid>
    </div>
  );
}
export default App;
