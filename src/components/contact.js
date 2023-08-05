
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
                <Grid item xs={12}>
                <p><i className="fa-solid fa-envelope" style={{marginRight: "2px"}}></i>{props.contact.email}</p>
                </Grid>
                <Grid item xs={12}>
                <p><i className="fa-solid fa-phone" style={{marginRight: "2px"}}></i>{props.contact.phone}</p>        
                </Grid>
            </Grid>
       
        </>
    )
}
export default MyContact;