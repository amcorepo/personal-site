import * as React from 'react';
import Button from '@mui/material/Button';

function MyThought({onBackClick}) {
    const handleBackClick = () => {
        onBackClick();
    }
    return (
<Button onClick={handleBackClick} size="small" sx={{fontSize: '0.7em', paddingLeft: '0', textAlign: 'left'}}>BACK</Button>
    )
}

export default MyThought