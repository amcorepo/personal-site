
import Grid from '@mui/material/Grid';
import React  from 'react';
import data from '../data.json';
import Typography from '@mui/material/Typography';



function MyContact(props) {
    return (
        <>  
        <Grid container id="contact" className="sidecat">
            <Grid item xs={12}>
            <h3 style={{marginBottom: '10px'}}><i className="fa-regular fa-comment" style={{marginRight:"10px"}}></i>Contact</h3>
            </Grid>
            <Grid container item xs={12} sx={{alignItems: "center", marginBottom: "10px"}}>
                <i className="fa-solid fa-envelope" style={{marginRight: "5px"}}></i> <Typography variant="body1">{props.contact.email}</Typography>
            </Grid>
            <Grid container item xs={12} sx={{alignItems: "center"}}>
                <i className="fa-solid fa-phone" style={{marginRight: "5px"}}></i> <Typography variant="body1">{props.contact.phone}</Typography>
            </Grid>
        </Grid>
        </>
    )
}
export default MyContact;