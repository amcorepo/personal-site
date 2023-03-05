import * as React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import SideContent from './components/sideContent.js'
import MainContent from './components/mainContent.js'

function App() {
  return (
    <div className="App">
        <Grid container sx={{height:'100vh'}}>
          <Grid container item xs={12} md={3} direction='column' sx={{backgroundColor: '#4040cd', color:'white', padding: '2rem', position: {md: 'sticky'}, left: {md: '0'}, height: {md:'100vh'}, boxShadow: {md:"1px 0px 2px 1px #ccc"}}}>
            <SideContent/>
          </Grid>
          
          <Grid container item xs={12} md={9} sx={{padding: '2rem', overflowY: {md:'auto'}, height:{md:'100vh'}  }}  >
          <MainContent />
            {/* <Grid container item xs={12} md={9}>
          
            </Grid>
            <Grid item xs={12} md={3}>
              <h3>Web Activity</h3>
            </Grid> */}
          </Grid>
        </Grid>
    </div>
  );
}
export default App;
