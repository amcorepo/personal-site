import * as React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import SideContent from './components/sideContent.js'
import MainContent from './components/mainContent.js'

function App() {
  return (
    <div className="App">
        <Grid container sx={{height:'100vh'}}>
          <Grid container item xs={12} lg={3} direction='column' sx={{backgroundColor: '#4040cd', color:'white', padding: '2rem'}}>
            <SideContent/>
          </Grid>
          <Grid container item direction='row' xs={12} lg={9} sx={{padding: '2rem'}} >
            <Grid item xs={12}>
           <MainContent />
            </Grid>
          </Grid>
        </Grid>
    </div>
  );
}
export default App;
