
import Grid from '@mui/material/Grid';
import React  from 'react';
import data from '../data.json';

const socialData = data.social[0];
const personalData = data.personal[0];
console.log(socialData.linkedin)
// function Skill({ name, level, iconClass }) {
//     return (
//       <Grid container spacing={0.5} sx={{marginBottom:'10px'}}>
//              <Grid item>
//              <i className={iconClass} style={{marginRight:'5px'}}></i>
//             </Grid>
//             <Grid item>
//             <p>{name}</p>
//             </Grid>
//         </Grid>
      
//     );
//   }
function MySocial() {
    return (
        <>  
            <Grid container>
                {/* <Grid item xs={12}>
                <h3 style={{marginBottom: '10px'}}><i className="fa-regular fa-comment" style={{marginRight:"10px"}}></i>Let's Talk</h3>
                </Grid> */}
                <Grid item>
                    <a href={socialData.linkedin} target="_blank" rel="noopener noreferrer" style={{color: 'white', fontSize: '1.5em'}}>
                    <i className="fa-brands fa-linkedin"></i>
                    </a>
                </Grid>
                <Grid item>
                    <a href={socialData.github} target="_blank" rel="noopener noreferrer" style={{color: 'white', fontSize: '1.5em'}}>
                    <i className="fa-brands fa-github" ></i>
                    </a>
                </Grid>
                <Grid item>
                    <a href={personalData.email} target="_blank" rel="noopener noreferrer" style={{color: 'white', fontSize: '1.5em'}}>
                    <i className="fa-solid fa-at" ></i>
                    </a>
                </Grid>
 
            </Grid>
        </>
    )
}

export default MySocial;