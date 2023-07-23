import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import thoughts from '../thoughts.json';

function MyThought({onBackClick}) {
    const handleBackClick = () => {
        onBackClick();
    }


    return (
    <Grid container direction="column">
        <Grid container item direction="row">
        <Button onClick={handleBackClick} size="small" sx={{fontSize: '0.7em', paddingLeft: '0', textAlign: 'left'}}>BACK</Button>
        </Grid>
        <Grid container item direction="row" sx={{justifyContent:'space-between'}}>

            <div>Category</div>
            <div>Date</div>
            {/* Category and Date */}
        </Grid>
        <Grid container item direction="column">
            {/* Title, description, image, and content */}
        </Grid>
    </Grid>
    )
}

export default MyThought