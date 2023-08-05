
import Grid from '@mui/material/Grid';
import React  from 'react';
import data from '../data.json';
import Typography from '@mui/material/Typography';



function MyContact(props) {
    return (
        <>  
            <Grid item xs={12}>
                <h3 style={{marginBottom: '10px'}}><i className="fa-regular fa-comment" style={{marginRight:"10px"}}></i>Contact</h3>
            </Grid>
            <Grid container spacing={1.5} direction="column">
                <Grid container item xs={12} alignItems="center" spacing={0.5}>
                    <Grid item sx={{marginRight: "2px"}}>
                    <i className="fa-solid fa-envelope"></i>
                    </Grid>
                    <Grid item>
                    <p>{props.contact.email}</p>
                    </Grid>
                </Grid>
                <Grid container item xs={12} alignItems="center" spacing={0.5}>
                    <Grid item sx={{marginRight: "2px"}}>
                    <i className="fa-solid fa-phone"></i>
                    </Grid>
                    <Grid item>
                    <p>{props.contact.phone}</p> 
                    </Grid>     
                </Grid>
            </Grid>
       
        </>
    )
}
export default MyContact;